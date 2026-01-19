#  Day 3 — Middleware & Error Handling

This day focuses on **middleware** and **error handling** in Express.js — two core concepts that separate beginner APIs from **production‑ready REST APIs**.

---

## 📌 What You’ll Learn

* What middleware is and how it works in Express
* Creating **custom middleware** (logging, authentication pattern)
* Handling **async errors** properly
* Writing a **global error handler**
* Handling **404 (Not Found)** routes gracefully
* Managing **validation and server errors** using HTTP status codes

---

## Key Concepts

### Middleware Flow

```
Request → Middleware → Route → Controller → Response
```

Middleware can:

* Read or modify the request
* Stop the request
* Pass control using `next()`
* Handle errors globally

---


---

## ⚙️ Implemented Middleware

### ✅ Logger Middleware

Logs request method and URL for every request.

### ✅ Authentication Middleware (Pattern)

Basic structure for protecting routes (JWT implementation comes later).

### ✅ Async Error Handling

Errors from async controllers are safely passed to the global error handler.

---

## 🚨 Error Handling Strategy

### Global Error Handler

* Centralized error response
* Returns proper HTTP status codes
* Hides stack trace in production

### 404 Handler

* Handles undefined routes gracefully

### Validation Errors

* Returns `400 Bad Request` when input is invalid

---

## 📦 Installation & Run

```bash
npm install
npm run dev
```

---

## 🎯 Learning Outcome

After completing Day 3, you should be able to:

* Explain middleware clearly in interviews
* Build clean, maintainable Express APIs
* Handle errors like a professional backend developer

---

## 🚀 Next Step

👉 **Day 4 — Authentication & Authorization (JWT)**

* Token‑based authentication
* Protecting routes
* Role‑based access control

---

Happy Coding! 💻🔥
