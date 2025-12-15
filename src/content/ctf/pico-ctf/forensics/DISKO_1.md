---
title: 'DISKO 1'
difficulty: 'Easy'
date: 2025-10-23
link: 'https://play.picoctf.org/practice/challenge/505'
timeSpent: '10'
---

## 🧠 What I Practiced/Learned/Discovered

- Always decompress files before trying the challenge (lol). I tried the challenge for few minutes to finally find out that I was working on a zip.

## 🔧 Tools used

**Linux shell**

- `gzip`
- `strings`
- `grep`

# Steps

1. Decompressed the file : `gzip -d disko-1.dd.gz`
2. IT was hard to read from the file directly using `cat` because it's a binary file and non human-readable
   - Used `strings` : which is a command used to extract readable strings from binaries.
   - Also used our favorite tool : `grep` to find stuffs.
3. Run `strings disko-1.dd | grep pico{` and got the flag!
