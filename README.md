# REST API Design Mastery 🚀

This repository documents my **day-by-day learning journey** to master **REST API Design**, from fundamentals to production-level best practices.

The goal is to build a **strong backend mindset**, focusing on:
- Clean API design
- Proper HTTP usage
- Scalable architecture
- Real-world implementation using **Node.js & Express**

---

## 🧭 Learning Roadmap

### ✅ Day 1 — REST Basics & Architecture
**Topics Covered**
- What is REST (Representational State Transfer)
- HTTP methods (GET, POST, PUT, DELETE)
- Request–Response lifecycle
- HTTP status codes & conventions

**Implementation**
- Created a basic Express server
- Implemented test route:
  - `GET /ping` → returns `{ "message": "pong" }`
- Returned JSON responses with proper status codes
- Handled unknown routes with `404`

📁 File: `day1`

---

### ⏳ Upcoming Days
- Day 2 — RESTful Resource Design & POST Requests
- Day 3 — CRUD APIs with MongoDB
- Day 4 — Middleware, Validation & Error Handling
- Day 5 — Authentication & Authorization
- Day 6 — Pagination, Filtering & Sorting
- Day 7 — API Security & Best Practices
- Day 8 — Versioning, Documentation & Deployment

---

## 🛠 Tech Stack
- Node.js
- Express.js
- MongoDB (from later days)
- REST Architecture
- JSON & HTTP

---

## 📌 How to Run Any Day Locally

```bash
cd day1-rest-basics
npm install
node index.js
