---
title: 'Crack the Gate 1'
difficulty: 'Easy'
date: 2025-10-22
link: 'https://play.picoctf.org/practice/challenge/520'
timeSpent: '10'
---

## 🧠 What I Practiced/Learned/Discovered

- When a string seems strange, always try to find if it has been encoded

## 🔧 Tools used

**Websites**

- dcode : https://www.dcode.fr

**Linux shell**

- `curl`

# Steps

1. Went on the website and tested a SQL injection
2. Then went in the inspector to see if anything could help me
3. Found something that was encoded
   ![[Pasted image 20251023001559.png]]
4. Tried to identify the encoding here : https://www.dcode.fr/identification-chiffrement
   - Found it was probably a`ROT-13`, decoded it
   - Got this : NOTE: Jack - temporary bypass: use header "X-Dev-Access: yes"
5. Inspect the API call to reproduce it to curl
   - POST
   - link : http://amiable-citadel.picoctf.net:53329/login
   - "email": "ctf-player@picoctf.org"
   - Header to add : "X-Dev-Access: yes"
6. Run `curl -X POST -H "Content-Type: application/json" -H "X-Dev-Access: yes" -d '{"email": "ctf-player@picoctf.org"}'  http://amiable-citadel.picoctf.net:53329/login ` and got the flag !!
