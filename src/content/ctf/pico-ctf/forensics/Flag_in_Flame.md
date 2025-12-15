---
title: 'Cookie Monstqer Secret Recipe'
difficulty: 'Easy'
date: 2025-10-20
link: 'https://play.picoctf.org/practice/challenge/523'
timeSpent: '10'
---

## 🧠 What I Practiced/Learned/Discovered

- Discovered tesseract which is a tool that helps extracting text on an image.
- How to easily decode encoded strings and identify encoding algorithm applied to a text.

## 🔧 Tools used

**Websites**

- dcode : https://www.dcode.fr

**Linux shell**

- `base64` (decoding)
- `cat`
- `tesseract` (OCR)

# Steps

1. The file looked like a base64 code so I tried `cat logs.txt | base64 -d` but it returned me weird characters
   ![[Pasted image 20251020224157.png]]

2. Those characters reminded me of when I open images as text, so I tried to give the output to an image file instead `cat logs.txt | base64 -d > output.jpg` and it gave me a picture
3. Opened the picture and saw a text in the middle of the picture. The text was so long I couldn't retype it and I couldn't also directly copy the text using my mouse.
4. Searched for a text-on-image extractor and found a tool called `tesseract`
5. Installed the tool : `sudo apt install tesseract-ocr`
6. Run the command : `tesseract output.jpg result`
7. Got the text and copied it
8. Went on dcode to try to find the encoding algorithm : https://www.dcode.fr/identification-chiffrement
9. It gave a really positive result on ASCII
   ![[Pasted image 20251020225451.png]]
10. So I tried to decode it in ASCII and got the flag : https://www.dcode.fr/code-ascii
