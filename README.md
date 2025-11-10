# Donation Dashboard

### 🌐 Live Demo

(https://donation-dashboard-olive.vercel.app/)

---

## 📖 Overview

A modern, responsive web dashboard to track donations, donors, and trends with a clean and minimal UI.  
Built with **React**, **Tailwind CSS**, and **Chart.js**, it’s fast, interactive, and visually appealing.

---

## ✨ Features

- 📊 **Real-time donation summary & chart**
- ➕ **Add Donation** form with name, amount, and date
- 🔍 **Filter by Date** to view specific records
- 💾 **Data persistence** using localStorage
- 🌓 **Light / Dark theme toggle**
- 🔁 **Reset Data** option
- 📱 Fully responsive modern layout

---

## 🛠️ Tech Stack

- **React (Vite)**
- **Tailwind CSS**
- **Chart.js / react-chartjs-2**
- **localStorage (No backend)**
- **Deployed on Vercel**

---

## 🚀 Getting Started

### 1️⃣ Clone & Setup

```bash
git clone <your-repo-url>
cd donation-dashboard
npm install
npm run dev
Open http://localhost:5173 to view it locally.

2️⃣ Build for Production
bash
Copy code
npm run build
Deploy the dist/ folder on Vercel, Netlify, or GitHub Pages.

📂 Project Structure
css
Copy code
src/
 ├── components/
 │   ├── SummaryCards.jsx
 │   ├── DonationChart.jsx
 │   ├── DonationTable.jsx
 │   └── DonationForm.jsx
 ├── data.js
 ├── App.jsx
 ├── main.jsx
 └── index.css

💡 Future Enhancements

Add donor leaderboard
Integrate backend API
Export donation data as CSV
```
