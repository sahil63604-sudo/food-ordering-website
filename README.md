# 🍽️ Food Ordering Website — MERN Stack

<p align="center">
  <strong>A full-stack MERN food ordering platform with online ordering, table reservations, real-time order tracking, and admin management.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Node.js-Express-339933?logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-Mongoose-47A248?logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/WebSocket-Real--Time-010101?logo=websocket&logoColor=white" />
</p>

---

## 🌐 Live Demo

🔗 **[View Live Application](https://food-ordering-frontend-vyry.onrender.com/)**

---

## 📖 About the Project

This **Food Ordering Website** is a full-stack MERN application developed to simulate a real-world restaurant ordering system.

Users can browse the menu, search for food items, add products to their cart, manage quantities, place orders, provide delivery details, reserve tables, and track their orders.

The application also includes an **admin dashboard** where administrators can manage menu items, food availability, customer orders, reservations, and order statuses.

A **WebSocket-based real-time communication system** is used to update customers when their order status changes.

---

## 🚀 Features

### 👤 User Features

* 🍔 Browse food items
* 🔍 Search food items
* 🏷️ Browse food by category
* 🛒 Add food items to cart
* ➕ Increase item quantity
* ➖ Decrease item quantity
* 🗑️ Remove items from cart
* 📦 Place food orders
* 📍 Enter delivery details during checkout
* 📋 View order information
* 🔄 Track order status in real time
* 📅 Reserve restaurant tables
* 🔐 User authentication
* 🍪 JWT authentication using cookies
* 📱 Responsive user interface
* 🔔 Real-time order updates

### 🔐 Admin Features

* 🔑 Admin authentication
* 🍽️ Add new food items
* ✏️ Edit food items
* 🗑️ Delete food items
* 🟢 Enable food availability
* 🔴 Disable food availability
* 📋 View customer orders
* 📦 Manage customer orders
* 🔄 Update order status
* 📅 View table reservations
* ✅ Manage reservation requests
* 📊 View dashboard information
* 🔔 Receive real-time updates

---

## 📦 Order Status Flow

Orders can be managed through different stages:

```text
Pending
   ↓
Preparing
   ↓
Out for Delivery
   ↓
Delivered
```

When the admin updates an order status, the customer's interface can receive the update through **WebSocket communication** without requiring a manual page refresh.

---

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router DOM
* Tailwind CSS
* Framer Motion
* SweetAlert2
* React Icons
* WebSocket Client

### Backend

* Node.js
* Express.js
* JWT
* Cookie Parser
* WebSocket
* Nodemailer

### Database

* MongoDB
* Mongoose

### Development Tools

* Vite
* Git
* GitHub
* VS Code
* Render
* Vercel

---

## 🏗️ Project Architecture

```text
food-ordering-website/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── assets/
│   │   └── ...
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── ...
│   └── package.json
│
└── README.md
```

> Folder names may vary depending on the current project structure.

---

## 📸 Screenshots

### 🏠 Home / Menu

<img width="1366" height="768" alt="Home Page" src="https://github.com/user-attachments/assets/b2547a04-a78d-467b-94cf-42c331da77a0" />

### 🍔 Food Menu

<img width="1366" height="768" alt="Food Menu" src="https://github.com/user-attachments/assets/a8e1a7ee-fc3e-4b71-9744-72ffdc56ef27" />

### 🛒 Cart & Checkout

<img width="1920" height="1080" alt="Cart and Checkout" src="https://github.com/user-attachments/assets/a4f682c9-4e1b-479b-81ef-0f095960d85c" />

### 👨‍💼 Admin Dashboard

<img width="1366" height="768" alt="Admin Dashboard" src="https://github.com/user-attachments/assets/978f6713-f527-4b1b-ab6d-7f780ef1a7d9" />

### 📦 Order Management

<img width="1920" height="1080" alt="Order Management" src="https://github.com/user-attachments/assets/0a88a7da-93e9-4339-8aa1-8b63f5ed4f7b" />

### 📅 Table Reservations

<img width="1920" height="1080" alt="Table Reservations" src="https://github.com/user-attachments/assets/1a6668eb-03ef-421b-a3c8-8f6b0d166410" />

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/sahil63604-sudo/food-ordering-website.git
```

### 2. Navigate into the project

```bash
cd food-ordering-website
```

---

## 🔧 Backend Setup

Navigate to the backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file inside the `backend` folder:

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
SECRET_KEY=your_secret_key

EMAIL=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
```

Start the backend server:

```bash
npm start
```

---

## 💻 Frontend Setup

Open another terminal and navigate to the frontend folder:

```bash
cd client
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

---

## 🌍 Local Development URLs

### Frontend

```text
http://localhost:5173
```

### Backend

```text
http://localhost:3000
```

---

## 🔐 Environment Variables

The backend requires environment variables for database access, authentication, and email notifications.

| Variable         | Description                            |
| ---------------- | -------------------------------------- |
| `PORT`           | Backend server port                    |
| `MONGODB_URI`    | MongoDB connection string              |
| `SECRET_KEY`     | Secret key used for JWT authentication |
| `EMAIL`          | Email account used for notifications   |
| `EMAIL_PASSWORD` | Email app password                     |

> **Important:** Never commit your `.env` file or expose database credentials, JWT secrets, or email passwords in the repository.

---

## 🔄 Application Flow

```text
                    USER
                      │
          ┌───────────┴───────────┐
          │                       │
       Browse                  Search
        Menu                     Food
          │                       │
          └───────────┬───────────┘
                      │
                 Add to Cart
                      │
                      ▼
                   Checkout
                      │
                      ▼
                 Place Order
                      │
                      ▼
                Backend API
                      │
                      ▼
                   MongoDB
                      │
                      ▼
               Admin Dashboard
                      │
          ┌───────────┼───────────┐
          │           │           │
     Manage Menu   Manage Orders  Reservations
                      │
                      ▼
              Update Order Status
                      │
                      ▼
                  WebSocket
                      │
                      ▼
                  USER
                      │
                      ▼
              Real-Time Update
```

---

## 🔄 Real-Time Order Tracking

One of the key features of this project is **real-time order status updates**.

When an administrator changes the status of an order, the customer can receive the update through WebSocket communication.

For example:

```text
Admin
  │
  │ Update order
  ▼
Backend
  │
  │ WebSocket message
  ▼
Connected User
  │
  ▼
Order status updated
```

This avoids the need for the user to continuously refresh the page to check whether their order has changed.

---

## 🔐 Authentication

The application uses **JWT-based authentication**.

The authentication flow works approximately as follows:

```text
User Login
    │
    ▼
Backend validates credentials
    │
    ▼
JWT generated
    │
    ▼
JWT stored using cookie
    │
    ▼
Authenticated requests
    │
    ▼
Authentication middleware
    │
    ▼
Protected route
```

Protected functionality is restricted through authentication and authorization middleware.

---

## 📅 Table Reservation System

Users can submit table reservation requests through the application.

The admin can:

* View reservation requests
* Confirm reservations
* Cancel reservations
* Manage reservation information

Email notifications can also be used to communicate reservation updates to users.

---

## 📱 Responsive Design

The frontend is designed to work across different screen sizes.

The interface adapts to:

* 💻 Desktop
* 📱 Mobile
* 📲 Tablet

Tailwind CSS is used to create the responsive layout and UI components.

---

## 🎯 Key Learning Outcomes

Through this project, I worked with several concepts involved in full-stack web development:

* Building REST APIs with Express.js
* Connecting a Node.js backend with MongoDB
* Creating MongoDB schemas using Mongoose
* Implementing JWT authentication
* Working with cookies
* Creating protected routes
* Building reusable React components
* Managing React state
* Working with React Router
* Implementing cart functionality
* Handling CRUD operations
* Implementing WebSocket communication
* Building an admin dashboard
* Working with asynchronous API requests
* Managing frontend and backend communication
* Deploying a full-stack application

---

## 🚀 Future Improvements

* 💳 Online payment gateway integration
* ❤️ Wishlist functionality
* ⭐ Food ratings and reviews
* 🔍 Advanced search and filtering
* 📈 Detailed sales analytics
* 🎟️ Coupon and discount system
* 📱 Progressive Web App (PWA)
* 🔔 Improved notification system

---

## 📄 License

This project was developed for **learning and portfolio purposes**.

---

## 👨‍💻 Author

### Sahil Kumar

**Full Stack Developer | MERN Stack**

* 🐙 **GitHub:** [sahil63604-sudo](https://github.com/sahil63604-sudo)
* 💼 **LinkedIn:** [Sahil Kumar](https://www.linkedin.com/in/sahil-kumar-mern)

---

<p align="center">
  ⭐ If you find this project useful, consider giving it a star!
</p>
```

**One thing I would change before you push it:** verify the actual GitHub repository URL and your current folder names (`client`, `backend`, etc.). I used the structure from the README you recovered, but if your current repository has different names, those commands/architecture lines should match the real repo.
