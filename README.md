# Smart Parking System

A full-stack parking management solution developed to streamline the parking process using QR codes and role-based access control. No more manual entry or paper tickets—everything is digital.

## 🚀 What's Inside?

We've built this with a four-role system to make sure the workflow actually makes sense in the real world:

- **SuperAdmin**: The boss. Can create Managers and oversee the whole system.
- **Manager**: Controls specific parking areas and manages the drivers assigned to them.
- **Driver**: The ones on the ground. They handle parking/retrieval requests and update the car status.
- **User**: The customers. They scan a QR code to book a spot and can track their car's status in real-time.

## 🛠 Tech Stack

- **Frontend**: React (Vite) for a fast, snappy UI.
- **Backend**: Express.js handling the API logic.
- **ORM**: Prisma for clean database interactions.
- **Database**: PostgreSQL (hosted on Supabase).

## 🔑 Initial Setup & Login

If you're testing this for the first time, use the SuperAdmin account to get everything started.

- **Email**: `admin@parking.com`
- **Password**: `admin123`

## 🏃 Local Development

If you want to run this locally:

### 1. The Backend
```bash
cd backend
npm install
# Set up your .env with DATABASE_URL and JWT_SECRET
npx prisma generate
npm start
```

### 2. The Frontend
```bash
cd frontend
npm install
# Create a .env.development and set VITE_API_URL
npm run dev
```

## 🏗 Deployment

This project is configured to run on:
- **Database**: Supabase
- **Backend**: Render
- **Frontend**: Vercel

Make sure your environment variables are configured on these platforms before deploying!
