import sqlite3

# Connect to database
conn = sqlite3.connect("database.db")
c = conn.cursor()

# Create table to store encrypted emails
c.execute('''CREATE TABLE IF NOT EXISTS emails (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                sender_email TEXT,
                receiver_email TEXT,
                encrypted_message TEXT
            )''')

conn.commit()
conn.close()

print("Database and table created successfully!")