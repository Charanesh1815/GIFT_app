
from gift_cipher_try1 import encrypt_using_gift64, bin_to_64bit_hex, decrypt_using_gift64

def text_to_hex(text):
    z=''.join((hex(ord(c))[2:] for c in text))
    return z

def hex_to_text(text):
    ans=''
    for i in range(0,len(text),2):
        ans+=chr(int(text[i:i+2], 16))       
    return ans 

def break_into_64bit_parts(text):
    padding_val = (16 - len(text)%16)%16
    text = text+'0'*padding_val
    final_arr = [text[i:i+16] for i in range(0,len(text),16)]
    return final_arr
    
def encrypt_text_with_gift64(text, main_key):
    text = text_to_hex(text)
    parts_64bit = break_into_64bit_parts(text)
    final_text = ''
    for text in parts_64bit:
        e = encrypt_using_gift64(text, main_key)
        final_text+=(bin_to_64bit_hex(e))
    return final_text

main_key = '00000000000000000000000000000000'

with open('text_to_encrypt.txt', 'r') as file:
    lines = [line.strip() for line in file]
new_lines = []
for text in lines:
    e = encrypt_text_with_gift64(text, main_key)
    new_lines.append(e)
with open('encrypted_text.txt', 'w') as file:
    for line in new_lines:
        file.write(line+'\n')

