---
title: 'Verify'
difficulty: 'Easy'
date: 2025-10-23
link: 'https://play.picoctf.org/practice/challenge/450'
timeSpent: '10'
---

## 🧠 What I Practiced/Learned/Discovered

- How to hash all the files of a folder

## 🔧 Tools used

**Linux shell**

- `sha256sum`
- `grep`

# Steps

1. Run `sha256sum files/* | grep b09c99c555e2b39a7e97849181e8996bc6a62501f0149c32447d8e65e205d6d2` :
   - to hash all the files in `files` folder
   - then used grep to find the file with the same hash as the one provided
2. Run `./decrypt.sh files/XXX` : To decrypt the file and got the flag
