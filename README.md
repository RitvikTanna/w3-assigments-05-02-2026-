# W3 Assignment - 05-02-2026

A web development project built using modern frontend and backend technologies. This project demonstrates full-stack development concepts including authentication, API integration, and database connectivity.

## 🚀 Features

- User Authentication (Login / Logout)
- Secure Password Handling
- JWT Authentication
- Backend API Integration
- Database Connectivity
- Responsive User Interface
- Protected Routes
- State Management
- Error Handling

## 🛠 Tech Stack

### Frontend
- React.js
- Axios
- Zustand
- CSS

### Backend
- Node.js
- Express.js
- JWT Authentication
- bcryptjs

### Database
- MongoDB

### Deployment
- Vercel

---

## 📂 Project Structure

```bash
project-root/
│
├── Frontened-react/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── APIS/
│   ├── middlewares/
│   ├── services/
│   ├── models/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

Clone repository:

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
```

Move into project directory:

```bash
cd YOUR_REPOSITORY
```

### Frontend Setup

```bash
cd Frontened-react
npm install
npm run dev
```

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

---

## 🔐 Environment Variables

Create `.env` file inside backend:

```env
MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

NODE_ENV=production
```

Frontend `.env`

```env
VITE_API_URL=
```

---

## 📡 API Endpoints

### Authentication

#### Login

```http
POST /common-api/login
```

Request:

```json
{
  "email":"user@gmail.com",
  "password":"password123"
}
```

---

#### Logout

```http
GET /common-api/logout
```

---

#### Check Authentication

```http
GET /common-api/check-auth
```

---

#### Change Password

```http
PUT /common-api/change-password
```

---

## 🚀 Deployment

Frontend and backend deployed using Vercel.

Deployment Steps:

1. Push code to GitHub
2. Connect repository to Vercel
3. Configure Environment Variables
4. Deploy


---

## 👨‍💻 Author

**Ritvik Tanna**

Engineering Student | Full Stack Developer | AI Enthusiast

---

## 📜 License

This project is developed for educational and learning purposes.
