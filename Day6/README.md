## 🧠 API Build Mind Map (Correct Order)

> 1️⃣ Model / Data Shape
  - User → fields → structure

    ⬇️

> 2️⃣ Utility Functions
  - hash password → generate token → helpers

    ⬇️

> 3️⃣ Middleware
  - auth check → validation → error handler

    ⬇️

> 4️⃣ Controllers
  - signup logic → login logic → profile logic

    ⬇️

> 5️⃣ Routes
  - POST signup → POST login → GET profile
    (connect controller + middleware)

    ⬇️

>  6️⃣ App Setup (app.js)
  - express → middlewares → routes mount

    ⬇️

>  7️⃣ Server (server.js)
  - port → listen

    ⬇️

>  8️⃣ Documentation
  - Postman collection → environment variables → export

    ⬇️

>  9️⃣ README
  - endpoints → auth → setup