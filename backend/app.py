from flask import Flask, request, jsonify, render_template, redirect, url_for, flash
from flask_cors import CORS
from imap_tools import MailBox
from email.message import EmailMessage
import smtplib
import json
import os
import sqlite3
#from rsa_utils import encrypt_message, decrypt_message, public_key
import click

app = Flask(__name__)
CORS(app)
app.secret_key = "your_secret_key"

USER_FILE = "users.json"

# --- User data management ---
def load_users():
    if os.path.exists(USER_FILE):
        with open(USER_FILE, 'r') as file:
            data = json.load(file)
            if isinstance(data, dict):
                return data
    return {}

def save_users(users):
    with open(USER_FILE, 'w') as file:
        json.dump(users, file)

# --- Email database setup ---
def initialize_database():
    conn = sqlite3.connect("database.db")
    c = conn.cursor()
    c.execute("""CREATE TABLE IF NOT EXISTS emails (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    sender_email TEXT NOT NULL,
                    receiver_email TEXT NOT NULL,
                    encrypted_message TEXT NOT NULL,
                    public_key TEXT NOT NULL
                )""")
    conn.commit()
    conn.close()

initialize_database()

# --- Email DB operations ---
def save_email_to_db(sender_email, receiver_email, encrypted_message, public_key):
    conn = sqlite3.connect("database.db")
    c = conn.cursor()
    c.execute("INSERT INTO emails (sender_email, receiver_email, encrypted_message, public_key) VALUES (?, ?, ?, ?)",
              (sender_email, receiver_email, encrypted_message, public_key.export_key().decode()))
    conn.commit()
    conn.close()

def delete_email_from_db(email_id):
    conn = sqlite3.connect("database.db")
    c = conn.cursor()
    c.execute("DELETE FROM emails WHERE id=?", (email_id,))
    conn.commit()

    c.execute("""CREATE TABLE temp_emails (
                    id INTEGER PRIMARY KEY,
                    sender_email TEXT NOT NULL,
                    receiver_email TEXT NOT NULL,
                    encrypted_message TEXT NOT NULL,
                    public_key TEXT NOT NULL
                )""")

    c.execute("INSERT INTO temp_emails (id, sender_email, receiver_email, encrypted_message, public_key) "
              "SELECT ROW_NUMBER() OVER (ORDER BY id), sender_email, receiver_email, encrypted_message, public_key FROM emails")
    c.execute("DROP TABLE emails")
    c.execute("ALTER TABLE temp_emails RENAME TO emails")
    c.execute("DELETE FROM sqlite_sequence WHERE name='emails'")
    conn.commit()
    conn.close()

# --- Auth ---
@app.route('/api/register', methods=['POST'])
def register():
    data = request.get_json()
    users = load_users()
    username = data.get('username')
    if username in users:
        return jsonify({'message': 'Username already exists'}), 409
    users[username] = {
        "password": data.get('password'),
        "email": data.get('email'),
        "name": data.get('name'),
        "app_password": data.get('appPassword')
    }
    save_users(users)
    return jsonify({'message': 'User registered successfully'}), 200

@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    users = load_users()
    username = data.get('username')
    password = data.get('password')
    if username in users and users[username]['password'] == password:
        return jsonify({'message': 'Login successful'}), 200
    return jsonify({'message': 'Invalid credentials'}), 401

@app.route('/api/inbox', methods=['POST'])
def get_user_inbox():
    data = request.get_json()
    username = data.get('username')
    users = load_users()
    if username not in users:
        return jsonify({"error": "User not found"}), 404
    email = users[username]["email"]
    app_password = users[username]["app_password"]
    try:
        with MailBox("imap.gmail.com").login(email, app_password, "Inbox") as mb:
            emails = []
            for msg in mb.fetch(limit=5, reverse=True, mark_seen=True):
                try:
                    decrypted_text = decrypt_message(msg.text)
                except Exception:
                    decrypted_text = "[Decryption Failed]"

                emails.append({
                    "uid": msg.uid,
                    "subject": msg.subject,
                    "from": msg.from_,
                    "date": msg.date.strftime("%Y-%m-%d %H:%M"),
                    "text": decrypted_text
                })
            return jsonify({"messages": emails}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/api/delete', methods=['POST'])
def delete_email():
    data = request.get_json()
    username = data['username']
    uid = data['uid']
    users = load_users()
    if username not in users:
        return jsonify({"error": "User not found"}), 404
    email = users[username]['email']
    app_password = users[username]['app_password']
    try:
        with MailBox("imap.gmail.com").login(email, app_password, "Inbox") as mb:
            mb.delete([uid])
            return jsonify({"message": "Email deleted."}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# --- Optional: Send Message via API ---
@app.route("/api/send-message", methods=["POST"])
def send_message():
    data = request.get_json()
    username = data.get("username")
    receiver_email = data.get("receiver_email")
    message = data.get("message")

    users = load_users()
    if username not in users:
        return jsonify({"message": "User not found"}), 404

    email_sender = users[username]["email"]
    email_password = users[username]["app_password"]

    encrypted_message = encrypt_message(message, public_key)
    save_email_to_db(email_sender, receiver_email, encrypted_message, public_key)

    msg = EmailMessage()
    msg.set_content(encrypted_message)
    msg["Subject"] = "Encrypted Email"
    msg["From"] = email_sender
    msg["To"] = receiver_email

    try:
        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
            server.login(email_sender, email_password)
            server.send_message(msg)
        return jsonify({"message": "Email sent successfully!"}), 200
    except smtplib.SMTPAuthenticationError:
        return jsonify({"message": "SMTP Authentication Failed."}), 401
    except Exception as e:
        return jsonify({"message": str(e)}), 500

if __name__ == '__main__':
    port = 5000
    base_url = f"http://127.0.0.1:{port}"
    print("\n🚀 Server is running! Click the links below to open in your browser:\n")
    click.secho(f"📩 Send Email: ", bold=True, nl=False)
    click.secho(f"{base_url}/", fg="cyan", underline=True)
    click.secho(f"🔑 Decrypt Email: ", bold=True, nl=False)
    click.secho(f"{base_url}/decrypt", fg="cyan", underline=True)
    app.run(debug=True, port=port)
