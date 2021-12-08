## To see the gift64 implementation:

The main file where the gift64 is implemented is gift_cipher_try1.py.
You can set any plaintext and main_key variable in line 143 and line 144. 
Then uncomment the code below to see the encrypted text generated and also the decryption.

States1 variable holds the states during encryption.
States2 variable holds the states during decryption.
To see the intermediate states of the plaintext in the encryption process, print the states1 and states2 variables.


## To see the text encryption & decryption process:

create a new file in the same folder where all these codes are present with the name 'text_to_encrypt.txt'.
Write any text in it which you want to encrypt.
Then, run the 'encrypt_text_file.py' program.
A new file with the name 'encrypted_text.txt' will be created which will contain the encrypted text.
Now, to decrypt this file, run the 'decrypt_text_file.py' program. It will generate a new file named 'decrypted_text.txt' which will contain the decrypted text.

You can change the main keys in the programs but they should be the same for encryption and decryption programs.

## To see the audio encryption & decryption process:

Explain app.py here how audio encryption is working

App.py works by using the utility.js file which is in the /static folder and the styling of our application is done by style.css and styles.css in the /templates folder. 

Firstly we take an audio file which is in ‘.wav’ format as we use the wave library in our app.py for  getting the details of the audio file. Then open the terminal and just run “ python app.py”.

When you want to encrypt the file in the application, Please click on the encrypt button. Upload your audio file and specify a secret key which you want to encrypt. And click on the encrypt button. 

Then when the application displays “ok”, we can download the encrypted file and the parameters file which will be downloaded in the downloads folder. 

When you want a decrypt functionality please upload the parameters text and encrypted text which is in the /downloads folder and decrypt it back to the same audio again. When application displays ‘ok’, please download the audio file and fins it in the “/downloads” folder.

Note : Python should be installed in the computer to run the application, we use flask in our project which is a framework of python.


## Inside the apps.py file:
There are 2 functions, ‘audio encryption’ and the other for ‘audio decryption’. These use the python wave library and base64 encoding to convert audio to text and text to audio. The encryption is performed on the text files. Parameters file is required in the end to generate .wav file from the binary data.


## To see the image encryption & decryption process:

Take any .jpg image that you wish to encrypt and put it into the folder where all these codes are and rename it ‘input_image.jpg’. Please take a small image file otherwise the code will take more time to run. For example we are providing a sample image ‘input_image.jpg’ that you may use to see how the code runs if you wish.

Then go to the ‘img_encryption.py’ program and run it. 
You will get a ‘image_encrypted.txt’ file. This has the encryption of the image.
To decrypt and get back the image, go to the ‘img_decryption.py’ and run it. 
It will create a file ‘output_image.jpg’. You can open and see this image.


# Working Application : https://gift-cipher.herokuapp.com/

# Video Link : https://drive.google.com/file/d/1KfM1Dqg0Sa3qTfzhUiTNOKoqFD4gjtJV/view?usp=sharing


## Gift Cipher Details

The main explanation and documentation of Gift Cipher is names as Gift_cipher_Term_Paper.pdf. and the explanation and video done by us are in the 'Gift Cipher.pdf' and 'Gift_Cipher_Video.mp4' files.