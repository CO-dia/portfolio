---
title: 'Riddle Registry'
difficulty: 'Easy'
date: 2025-10-19
link: 'https://play.picoctf.org/practice/challenge/530'
timeSpent: '10'
---

## 🧠 What I Practiced/Learned/Discovered

- Navigate/Analyze metadata
- Tested multiple metadata tools : `stat`, `ls -l` `exiftool`
- How to easily decode a base64 encoded string.

## 🔧 Tools used

**Linux shell**

- `cat`
- `base64`
- `exiftool`
- `stat`
- `ls`

# Steps

1. Downloaded the PDF : https://challenge-files.picoctf.net/c_saffron_estate/3e53e18e2663d8818a300f0d3b56ae837b668a4798c5f5884d33b668a7257ce2/confidential.pdf
2. Tried `cat FILE | grep picoCTF{` but nothing
3. Saw in the description to look everything + Metadata :
   `Find the PDF file here [Hidden Confidential Document](https://challenge-files.picoctf.net/c_saffron_estate/3e53e18e2663d8818a300f0d3b56ae837b668a4798c5f5884d33b668a7257ce2/confidential.pdf) and uncover the flag within the metadata.`
4. Tested `stat FILE`
5. Tested `ls -l`
6. Tested `exiftool FILE` (And it gave me something) ![[Pasted image 20251019220055.png]]
7. The Author name seemed weird because it's base 64
8. Run `echo "cGljb0NURntwdXp6bDNkX20zdGFkYXRhX2YwdW5kIV9jMjA3MzY2OX0=" | base64 -d` and found the flag
