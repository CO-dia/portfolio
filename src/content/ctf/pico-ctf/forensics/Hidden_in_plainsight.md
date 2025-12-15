---
title: 'Hidden in plainsight'
difficulty: 'Easy'
date: 2025-10-22
link: 'https://play.picoctf.org/practice/challenge/524'
timeSpent: '15'
---

## 🧠 What I Practiced/Learned/Discovered

- Discovered `steghide` which is a tool that extract hidden data from an image.
- Every details is important so make sure to be careful to everything. (I was staring at the solution for too long without knowing it)

## 🔧 Tools used

**Linux shell**

- `base64`
- `exiftool`
- `steghide`

# Steps

1. Open the picture in a visualizer to see if there is any visual evidence
2. Open the image with `exiftool img.jpg` to see if there is helping metadata
3. Found a `base 64` pattern in the comment.
4. Decoded it with `echo "" | base64 -d`
5. Found another `base 64` pattern, and run again `echo "" | base64 -d`
6. It showed pAzzword.
   - At that point I wasn't quite sure what to do with it
   - I didn't really realisez that "steghide was something important"
   - Search on internet "ctf i have an image and a password" lol
   - 1st link was about steghide
7. I ran `steghide extract -sf img.jpg -p pAzzword`
   - It returned : `wrote extracted data to "flag.txt".`
   - I `cat flag.txt` and I got the flag.
