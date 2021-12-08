
import base64
from decrypt_text_file import decrypt_text_with_gift64
from encrypt_text_file import *

main_key = '00000000000000000000000000000000'

with open('new_img1.jpg', 'rb') as img:
    s = base64.b64encode(img.read())
z = str(s, 'utf-8')
print(z)

q = encrypt_text_with_gift64(z, main_key)
print(q)
qq = decrypt_text_with_gift64(q, main_key)

with open('new_img.jpg', 'wb') as newfile:
    newfile.write(base64.decodebytes(s))

print(img.closed)
print(newfile.closed)

