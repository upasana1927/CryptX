🔐 CryptX: Secure Email Messaging System
CryptX is a secure email communication platform that ensures privacy using RSA encryption. Users can send and receive emails that are encrypted end-to-end using public-key cryptography. Built with a modular tech stack including React, Flask, SQLite, and SMTP/IMAP protocols, CryptX demonstrates how modern security and usability can be brought together in a functional messaging tool.

📌 Features
🔑 RSA-Based End-to-End Encryption
Automatically encrypts and decrypts emails using user-specific public/private key pairs

📧 Secure Email Delivery
Sends encrypted messages via SMTP and retrieves them securely using IMAP

🖥️ User Interface with React.js
User-friendly and responsive UI built with React and React Router

🔐 Token-Based Authentication
LocalStorage-based session management with route protection

🧪 Complete Testing Suite
Unit and integration testing of APIs, encryption logic, and email workflows

🧰 Tech Stack & Justification
Frontend: React.js + React Router
Component-based architecture

SPA routing for seamless UX

Backend: Python + Flask
Flask API for encryption, decryption, and message handling

Flask-CORS for frontend-backend communication

Email Communication: SMTP & IMAP
smtplib for sending encrypted messages

imap-tools for reading encrypted messages

Encryption: RSA (via PyCryptodome)
Secure RSA key generation and encryption/decryption using PKCS1_OAEP

Base64 encoding for transmitting binary data

Database: SQLite
Lightweight storage for message logs and keys

Utilities
Click for key generation scripts

email.message.EmailMessage for SMTP compliance

🧪 Testing Strategies
Unit Tests: Key generation, encryption/decryption

API Testing: Postman for verifying endpoints

Component Testing: React UI and navigation

Integration Testing: End-to-end message flow validation

Error Handling Tests: Simulated connection/key/message failures

📁 Folder Structure
CryptX/
├── backend/                     # Python Flask backend
│   ├── __pycache__/             # Python bytecode cache
│   ├── app.py                   # Main Flask app
│   ├── database.db              # SQLite database file
│   ├── generate.py              # RSA key generation script
│   ├── init_db.py               # DB initialization script
│   ├── private.pem              # RSA private key
│   ├── public.pem               # RSA public key
│   ├── rsa_utils.py             # RSA encryption/decryption logic
│   └── users.json               # Stores user data

├── frontend/                    # React frontend
│   ├── src/                     # React source code
│   ├── public/                  # Static files
│   └── package.json             # React project dependencies

├── requirements.txt             # Python backend dependencies
└── README.md                    # Project documentation

🚀 Setup Instructions
🔧 Backend Setup
Navigate to the backend directory:

bash
Copy
Edit
cd backend
Create virtual environment and install dependencies:

bash
Copy
Edit
python -m venv rsa
rsa\Scripts\activate   # For Windows
pip install -r requirements.txt
Run the Flask app:

bash
Copy
Edit
python app.py
💻 Frontend Setup
Navigate to frontend directory:

bash
Copy
Edit
cd frontend
Install dependencies:

bash
Copy
Edit
npm install
Start the Vite dev server:

bash
Copy
Edit
npm run dev
🔒 Security Note
RSA encryption keys are generated per session/user for maximum security

Messages are encrypted before sending and decrypted after receiving

No plaintext messages are stored or transmitted

👩‍💻 Author
Upasana Ghughtyal
