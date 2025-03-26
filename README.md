📧 CryptX: Secure Email Messaging System
CryptX is a secure email messaging system that ensures end-to-end encryption using RSA encryption, where RSA key pairs are generated using the mathematical RSA algorithm instead of external libraries. The system allows a sender to encrypt a message before sending it via email, and the receiver can decrypt it using their email authentication. Additionally, the receiver has the option to delete the message after decryption.

🚀 Features
✅ Secure Message Encryption: Uses 2048-bit RSA encryption generated mathematically.
✅ Email-Based Authentication: Receiver must authenticate with their email password to decrypt messages.
✅ End-to-End Security: Only the intended recipient can decrypt the message.

🛠️ Tech Stack & Libraries Used
Frontend:
React.js → For building the user interface

Backend:
Python (Core language)

Flask → Web framework for API handling

Encryption & Security (RSA Algorithm-Based):
Mathematical RSA Key Generation

Custom Implementation of Modular Exponentiation & Key Pair Generation

Email Handling:
smtplib → For sending encrypted emails

email.mime → For formatting emails

imaplib → For email authentication & retrieval

email.parser → For extracting email content

🔧 Installation & Setup
Clone the repository:

sh
Copy
Edit
git clone https://github.com/upasana1927/CryptX.git  
cd CryptX
Install dependencies:

sh
Copy
Edit
pip install -r requirements.txt  
npm install  # Install frontend dependencies
Run the backend:

sh
Copy
Edit
python app.py  
Run the frontend:

sh
Copy
Edit
cd frontend  
npm start  
Access the web interface:
Open http://localhost:3000/ in your browser.

📌 How It Works
1️⃣ RSA Key Generation (Implemented Using Algorithm)
Two large prime numbers are selected.

Compute n = p × q.

Compute Euler’s totient function.

Choose a public exponent.

Compute the private exponent using modular inverse.

Public Key: (e, n), Private Key: (d, n).

2️⃣ Sender's Process:
Sender writes a message.

Message is encrypted using the receiver’s public key.

Encrypted message is sent via email.

3️⃣ Receiver's Process:
Receiver opens the email.

Clicks on the decrypt link.

Enters email password for authentication.

If authenticated, the message is decrypted using the private key.

📜 RSA Algorithm Explained
Encryption: The sender encrypts the message using the receiver’s public key.

Decryption: The receiver decrypts the message using their private key.

Security: Since RSA is an asymmetric encryption algorithm, only the receiver can decrypt the message.

📩 Future Enhancements
✅ Add multi-factor authentication (MFA) for more security.
✅ Implement AES hybrid encryption for better performance.
✅ Build a mobile app version for secure messaging on the go.

🏆 Contributors
👩‍💻 Upasana Ghughtyal 
👨‍💻 Garima Kothari 

🔒 License
This project is licensed under the MIT License.

🤝 Contact
📧 Email: upasanaghughtyal@gmail.com
🐙 GitHub: upasana1927

This version keeps the explanation clean and technical without code snippets. Let me know if you need any further modifications! 🚀🔥