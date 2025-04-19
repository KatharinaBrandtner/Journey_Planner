# ✈️ Journey Planner

Journey Planner is a full-stack travel application that allows users to create, view, and manage trips with multiple cities, durations, and additional comments. Designed with usability and clarity in mind, it supports clean form handling and a modular structure—ideal for organizing even more complex travel itineraries.

---

## 🌟 Features

- ✍️ Create, view, update, and delete trips (CRUD functionality)
- 🗺️ Add up to three cities per trip with length of stay in days
- 📅 Choose start and end dates
- 🧑‍✈️ Select guides from a dropdown menu
- 📝 Add optional comments for individual notes
- 📷 Responsive design with image integration on the trip detail page
- 🔒 Expandable to include authentication (register & login)

---

## 💻 Tech Stack

- **Frontend:** Next.js with App Router (TypeScript + React)
- **Styling:** Bootstrap 5 + custom CSS modules
- **Backend:** Node.js with Express.js (REST API)
- **Database:** MongoDB via Mongoose
- **Communication:** Axios
- **Form Handling:** Reusable `InputGroup` component for consistent input rendering

---

## 📁 Project Structure

### 🔹 Frontend: `/Frontend/personal_travel_planner`

**Environment Variables (`.env`):**

```env
NEXT_PUBLIC_BACKEND_URL=http://localhost:8000
```

### 🔹 Backend: `/Backend`

**Environment Variables (`.env`):**

```env
PORT=8000
MONGO_URI=mongodb+srv://<user>:<password>@cluster0.mongodb.net/journeydb
TOKEN_SECRET=your_jwt_secret
JWT_EXPIRES_IN=30m
```

---

## 🚀 Getting Started

1. Clone the repo and navigate into both folders:

```bash
git clone https://github.com/yourusername/journey-planner.git
cd Frontend/personal_travel_planner
npm install
npm run dev
```

```bash
cd ../../Backend
npm install
npm run dev
```

2. Set up your MongoDB cluster:

- Create an account on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- Create a new database named `journeydb`
- Replace `<user>` and `<password>` in your `.env` file with your credentials

---

## 👤 User Registration & Login (optional)

The backend includes optional authentication endpoints (JWT-based). You can register and login users with the following endpoints:

### 🔐 Register a User

**POST** `http://localhost:8000/api/auth/signup`

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "password": "supersecret"
}
```

### 🔑 Login

**POST** `http://localhost:8000/api/auth/login`

```json
{
  "email": "jane@example.com",
  "password": "supersecret"
}
```

### 🛡️ Token Handling

- A JWT is returned upon successful login.
- You can store it in `localStorage` or `sessionStorage` on the frontend and attach it to future requests via the Authorization header.

---

## 🧪 Sample Trip Object

```json
{
  "country": "Italy",
  "startDate": "2025-05-12",
  "endDate": "2025-05-20",
  "guide": "Massimo Rossi (ESP)",
  "comment": "Class trip with guided tours",
  "cityone": "Rome",
  "numbercityone": "2",
  "citytwo": "Florence",
  "numbercitytwo": "3",
  "citythree": "Venice",
  "numbercitythree": "3"
}
```

---

## 💡 Future Ideas

- 📅 Calendar view for all trips
- 📍 Map integration (e.g., Leaflet.js or Google Maps API)
- 🔄 Drag & drop reordering of cities
- 📤 PDF export or sharing option

---

## 📸 Screenshots (Optional)

![Hero Section](/readme_images/hero.png)
![Add new city](/readme_images/add.png)
![Show all citys](/readme_images/all.png)
![Edit city](/readme_images/edit.png)

---
