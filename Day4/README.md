#  Day 4 — API Validation (Express.js)

📌 Overview

This project demonstrates API input validation and sanitization in a RESTful API built with Node.js and Express.js.

The focus of Day 4 is to ensure that:

Invalid or malicious input never reaches controllers

APIs return meaningful error responses

Validation logic is cleanly separated from business logic

## 🧠 What You Will Learn

* Input validation using **express-validator**
* Sanitizing request data to **prevent injection attacks**
* Structuring **validation middleware** properly
* Returning standardized error responses
* Understanding real-world request flow in Express APIs

## 🛠 Tech Stack
- Node.js
- Express.js
- express-validator
- Postman / Thunder Client (for testing)

## 🔀 API Request Flow (MOST IMPORTANT SECTION)
Understanding this flow is mandatory for backend developers.

> Client (Postman / Frontend)
        ↓
> server.js
        ↓
> express.json() middleware
        ↓
> Route (/api/users)
        ↓
> Validation Rules (express-validator)
        ↓
> Validation Result Middleware
        ↓
> Controller (Business Logic)
        ↓
> Response to Client

## 🏗️ Implementing Workflow (Step-by-Step)
This section explains how the API validation feature was implemented, from server setup to request handling.

### Step 1: Initialize Express Server
- Create server.js as the entry point.
- Initialize Express app.
- Enable JSON body parsing using express.json().
- Mount API routes under /api.

#### 📌 Purpose:
This step bootstraps the application and ensures the server can receive and parse client requests.

### Step 2: Define REST Routes
- Create route files inside the routes/ folder.
- Define endpoints such as:
- POST /api/users
- PUT /api/users/:id
- Keep routes thin — no business logic here.

#### 📌 Purpose:
Routes act as traffic controllers that decide which middleware and controller should run.

### Step 3: Create Validation Rules
- Create a separate validators/ folder.
- Define validation rules using express-validator.
- Apply:
- Required field checks
- Length and format validation
- Input sanitization (trim, normalizeEmail)

#### 📌 Purpose:
Ensure incoming request data is correct, safe, and usable before processing.

### Step 4: Handle Validation Results
- Create a reusable validation middleware.
- Collect validation errors using validationResult.
- Return 400 Bad Request if any validation fails.
- Forward request to controller only if validation passes.

#### 📌 Purpose:
Centralize error handling and prevent invalid data from reaching business logic.

### Step 5: Connect Validation to Routes
- Attach validation rules before controllers in route definitions.
- Order followed:
- Validation rules
- Validation result middleware
- Controller function

#### 📌 Purpose:
Middleware chaining ensures validation happens automatically for every request.

### Step 6: Implement Controllers
- Controllers receive already-validated data.
- No validation logic inside controllers.
- Focus only on business operations (create/update user).

#### 📌 Purpose:
Maintain clean separation of concerns and improve maintainability.

### Step 7: Send Structured API Responses
- Success responses return:
- success: true
- Informative message
- Error responses return:
- success: false
- Array of validation errors
- Use correct HTTP status codes.

#### 📌 Purpose:
Provide predictable and frontend-friendly API responses.
