JWTAuthAPI – A Simple & Secure Authentication API
JWTAuthAPI is a lightweight RESTful API built using Node.js, Express.js, MongoDB, bcryptjs, and jsonwebtoken (JWT). It demonstrates a clean and secure way to implement user authentication with hashed passwords and token-based access control.

🚀 Key Features
✅ Login API — Validates credentials and returns a JWT token.

🔐 Secure Passwords — Uses bcryptjs to hash and compare passwords.

🎟️ JWT Authentication — Protects user info route using access tokens.

🧩 Modular Structure — Organized into routes, models, and config.

🧪 Tested with Thunder Client — All routes tested and confirmed working.

📦 Technologies Used
Node.js

Express.js

MongoDB + Mongoose

bcryptjs

jsonwebtoken

Postman

🧪 Sample API Endpoints
=> POST: http://localhost:5000/api/auth/register 
*BODY
{
  "name":"Naresh",
  "email":"naresh@gmail.com",
  "password":"naresh123",
  "phone":8888899999,
  "role":"Trainee software engineer"
}

=> GET : http://localhost:5000/api/auth/users
=> POST: http://localhost:5000/api/auth/login
*BODY
{
  "email":"rajkumar@gmail.com",
  "password":"rajkumar123"
}

=> GET : http://localhost:5000/api/auth/userinfo
*HEADER
Send token in headers:
x-access-token: <JWT_TOKEN>