---
title: 'Cookie Monster Secret Recipe'
difficulty: 'Easy'
date: 2025-10-25
link: 'https://play.picoctf.org/practice/challenge/469'
timeSpent: '5'
---

## 🔧 Tools used

**Websites**

- URL Decoder : https://www.urldecoder.org/

**Linux shell**

- `base64`

# Steps

1. Went on the website and searched in the cookies to see if there was anything. (Spoiler alert : Nothing !!)
2. Tried the login form on the website
3. I arrived on a page with a message said saying: "Have you checked your cookies lately?"
   - So went back to cookies and found a cookie
   - At 1st nothing special on the cookie value string, it looked like base 64 then I noticed at the end of the string `%3D%3D`
   - It reminded me of URL encoding
4. Went on [URL Decoder](https://www.urldecoder.org/) website and pasted the string
   - It returned the string with `==` at the end, which represent the end of a base64 string.
5. Decoded the base64 with : `echo "...==" | base64 -d` and it gave me the flag.
