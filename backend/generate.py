import random
from sympy import isprime, mod_inverse

def generate_prime(bits=512):
    while True:
        num = random.getrandbits(bits)
        if isprime(num):
            return num

print("Generating prime numbers...")
p = generate_prime(512)
q = generate_prime(512)

print("Prime numbers generated!")
n = p * q
phi_n = (p - 1) * (q - 1)

e = 65537

print("Calculating modular inverse...")
d = mod_inverse(e, phi_n)

print("Saving keys to files...")
with open("private.pem", "w") as priv_file:
    priv_file.write(f"{d}\n{n}")

with open("public.pem", "w") as pub_file:
    pub_file.write(f"{e}\n{n}")

print("RSA Key Pair Generated Successfully!")
