from Crypto.PublicKey import RSA
from Crypto.Cipher import PKCS1_OAEP
import base64
import os
from generate import generate_keys

# Generate keys only if they don't exist
if not os.path.exists("private.pem") or not os.path.exists("public.pem"):
    generate_keys()


# Generate keys only if they don't exist
#   key = RSA.generate(2048)
#   with open("private.pem", "wb") as f:
 #       f.write(private_key)
#
 #   public_key = key.publickey().export_key()
  #  with open("public.pem", "wb") as f:
   #     f.write(public_key)

# Load RSA Keys
with open("private.pem", "rb") as priv_file:
    private_key = RSA.import_key(priv_file.read())

with open("public.pem", "rb") as pub_file:
    public_key = RSA.import_key(pub_file.read())

# Encrypt Message
def encrypt_message(message, public_key):
    cipher = PKCS1_OAEP.new(public_key)
    encrypted_message = base64.b64encode(cipher.encrypt(message.encode())).decode()
    return encrypted_message

# Decrypt Message
def decrypt_message(encrypted_message):
    cipher = PKCS1_OAEP.new(private_key)
    decrypted_message = cipher.decrypt(base64.b64decode(encrypted_message)).decode()
    return decrypted_message
