---
title: 'Log Hunt'
difficulty: 'Easy'
date: 2025-10-19
link: 'https://play.picoctf.org/practice/challenge/527'
timeSpent: '25'
---

## 🧠 What I Practiced/Learned/Discovered

- Play with linux shell
- Locate specific texts in a file.

## 🔧 Tools used

**Linux shell**

- `cat`
- `grep`

# Steps

1. Run `cat server.log` to see globally what's in the file
2. Run `cat server.log | grep picoCTF{
   - It returned this line `[1990-08-09 10:00:10] INFO FLAGPART: picoCTF{us3_` multiple times
   - I supposed that each Flag part had the `INFO FLAGPART:`
3. Run `cat server.log | grep "INFO FLAGPART"` - Got every part - Assembled the part in a logical sentence way.
   `
