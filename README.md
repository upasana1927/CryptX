# CryptX
📧 CryptX: Secure Email Messaging System

CryptX is a secure email messaging system that ensures end-to-end encryption using RSA encryption. The system allows a sender to encrypt a message before sending it via email, and the receiver can decrypt it using their email authentication. Additionally, the receiver has the option to delete the message after decryption.

🚀 Features

Secure Message Encryption: Uses RSA (2048-bit) encryption for securing messages.

Email-Based Authentication: Receiver must authenticate with their email password to decrypt messages.

End-to-End Security: Only the intended recipient can decrypt the message.


🛠️ Tech Stack & Libraries Used

Backend:

Python (Core language)

Flask (Web framework for API handling)

Encryption & Security:

Crypto.PublicKey.RSA → For generating RSA key pairs

Crypto.Cipher.PKCS1_OAEP → For message encryption & decryption

Email Handling:

smtplib → For sending encrypted emails

email.mime → For formatting emails

imaplib → For email authentication & retrieval

email.parser → For extracting email content

🔧 Installation & Setup

Clone the repository:

git clone https://github.com/yourusername/CipherChat.git
cd CipherChat

Install dependencies:

pip install -r requirements.txt

Run the Flask application:

python app.py

Access the web interface:

Open http://localhost:5000/ in your browser.

📌 How It Works

1️⃣ Sender's Process:

Sender writes a message.

Message is encrypted using the receiver’s public key.

Encrypted message is sent via email.

2️⃣ Receiver's Process:

Receiver opens the email.

Clicks on the decrypt link.

Enters email password for authentication.

If authenticated, the message is decrypted.

📜 RSA Algorithm Explained

Encryption: The sender encrypts the message using the receiver’s public key.

Decryption: The receiver decrypts the message using their private key.

Security: Since RSA is an asymmetric encryption algorithm, only the receiver can decrypt the message.

📩 Future Enhancements

✅ Add multi-factor authentication (MFA) for more security.

✅ Implement AES hybrid encryption for better performance.

✅ Build a mobile app version for secure messaging on the go.

🏆 Contributors

[Your Name] - Developer

[Co-Developer's Name] - Security & Email Integration

🔒 License

This project is licensed under the MIT License.

🤝 Contact

For any queries, feel free to reach out:
📧 Email: upasanaghghtyal@gmail.com 🐙 GitHub: upasana1927

