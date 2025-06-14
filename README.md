
# 🎌 AnimeFandom

AnimeFandom is a full-stack web app where users can explore, search, and interact with their favorite anime. Built with **Next.js** on the frontend and **Node.js (Express)** on the backend, this project integrates real anime data from the [Jikan API](https://jikan.moe) and supports features like favorites, fandom comments, and more.

---

## 🚀 Features

- 🌟 Browse Top-Rated Anime
- 🔍 Search Anime by Name
- 📄 View Detailed Anime Info (episodes, score, synopsis, etc.)
- ❤️ Add to Favorites (MongoDB)
- 💬 Fandom Comments Section
- 🔐 User Authentication (optional)
- 🎨 Clean, Responsive UI (Tailwind CSS)

---

## 🛠 Tech Stack

**Frontend**:  
- [Next.js 14 (App Router)](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com)
- [Axios](https://axios-http.com)

**Backend**:  
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com)

**External API**:  
- [Jikan API (Unofficial MyAnimeList API)](https://docs.api.jikan.moe)

---

## 📁 Project Structure

```
anime-fandom/
├── frontend/           # Next.js frontend
│   ├── app/            # App router pages
│   ├── components/     # Reusable UI components
│   └── lib/            # Axios setup, helpers
├── backend/            # Node.js backend
│   ├── models/         # Mongoose schemas
│   ├── routes/         # API routes
│   └── index.js        # Server entry
└── README.md
```

---

## 🧑‍💻 Getting Started

### ⚙️ Prerequisites

- Node.js ≥ 18
- MongoDB (local or [Atlas](https://www.mongodb.com/cloud/atlas))
- npm or yarn

---

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/anime-fandom.git
cd anime-fandom
```

---

### 2. Start the Backend

```bash
cd backend
npm install
```

Create a `.env` file:

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/anime-fandom
```

Then run:

```bash
node index.js
```

API will run at: `http://localhost:5000`

---

### 3. Start the Frontend

```bash
cd frontend
npm install
```

Create a `.env.local` file:

```
NEXT_PUBLIC_API_URL=http://localhost:5000
```

Then run:

```bash
npm run dev
```

Frontend will run at: `http://localhost:3000`

---

## 📸 Preview (Screenshots)

> Add screenshots here once available.

---

## 🔮 Coming Soon

- ✅ Anime recommendations
- 🧠 AI-powered suggestion chatbot
- 📈 Trending analytics with charts
- 🌙 Dark mode

---

## 📝 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

Made with ❤️ by [Your Name](https://github.com/yourusername)

Feel free to open an issue or PR if you have suggestions or contributions!
