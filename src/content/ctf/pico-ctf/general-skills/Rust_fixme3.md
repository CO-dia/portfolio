---
title: 'Rust fixme3'
difficulty: 'Easy'
date: 2025-10-25
link: 'https://play.picoctf.org/practice/challenge/527'
timeSpent: '5'
---

## 🧠 What I Practiced/Learned/Discovered

- Build and run a project in Rust (I've learned some Rust few months ago but I forgot about the build and run process)

## 🔧 Tools used

**Programming language**

- `Rust`
  - `cargo`

# Steps

1. Opened the file `main.rs` and read the code :
   - In the comments something said that sometimes we need to perform unsafe operations even with memory safe languages like Rust
   - Under that comment was an unsafe operation
   - But the key word `unsafe {` was commented and the closing tag too
2. De-commented `unsafe {` and `}` then saved the file
3. Run : `cargo build` to build the executable
4. Run `cargo run` and the flag was printed
