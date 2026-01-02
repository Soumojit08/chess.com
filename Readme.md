### 🧠 **Project:** Multiplayer Chess App (MERN + Socket.IO)

A real-time online chess game inspired by **chess.com**, built with the **MERN stack** — featuring WebSocket-based gameplay, move validation with `chess.js`, and a modern React UI using `react-chessboard`.

#### 🚀 Tech Stack

| Domain | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend** | React + Vite | Fast, modern UI framework |react-chessboard | socket.io-client | chess.js
| **Styling** | **Tailwind CSS + Shadcn UI** | Industry-standard, accessible UI components |
| **State** | **Redux Toolkit** | Efficient global state & server-state management |
| **Backend** | Node.js + Express | Scalable REST API & WebSocket handling |
| **Realtime** | Socket.IO | Real-time bi-directional events (Moves, Chat) |
| **Validation** | **Zod** | Type-safe schema validation (Frontend & Backend) |
| **Database** | **PostgreSQL** + **Drizzle ORM** | Relational data integrity & modern TypeScript ORM |
| **Caching** | **Redis** | Session management & game state caching |
| **Auth** | **Clerk** (or Better Auth) | Secure, battle-tested user authentication |
| **DevOps** | **Docker** + **Coolify** | Containerization & self-hosted PaaS deployment |
| **Testing** | **Vitest** + **Playwright** | Unit & End-to-End testing |

---

## 🗂️ Project Structure

```
chess-app/
│
├── client/                 # React Frontend
│   ├── src/
│   │   ├── components/     # Chessboard, Lobby, Login, etc.
│   │   ├── services/       # API and socket setup
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── server/                 # Node + Express Backend
│   ├── src/
│   │   ├── models/         # Mongoose schemas (User, Game)
│   │   ├── sockets/        # Socket.IO event handlers
│   │   ├── controllers/    # Auth/game routes (future)
│   │   ├── utils/          # Helper functions (ELO, etc.)
│   │   └── server.js
│   ├── package.json
│   └── .env
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repo

```bash
git clone https://github.com/yourusername/chess-app.git
cd chess-app
```

### 2️⃣ Install dependencies

**Backend**

```bash
cd server
npm install
```

**Frontend**

```bash
cd ../client
npm install
```

---

## 🧾 Environment Variables

In `/server/.env` create:

```
PORT=4000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/chess
JWT_SECRET=your_secret_key
CLIENT_URL=http://localhost:5173
```

---

## ▶️ Running the App (Development)

### Start backend

```bash
cd server
npm run dev
```

Runs on: **[http://localhost:4000](http://localhost:4000)**

### Start frontend

```bash
cd client
npm run dev
```

Runs on: **[http://localhost:5173](http://localhost:5173)**

---

## 🕹️ Features (MVP)

* Real-time chess moves using Socket.IO
* Move validation using `chess.js`
* Game creation & joining
* Basic MongoDB persistence for games
* Clean UI chessboard with `react-chessboard`

---

## 🔮 Coming Next

* ✅ JWT user authentication
* ✅ Lobby and matchmaking
* ✅ ELO rating system
* ✅ Game timers and resign/draw
* ✅ Spectator and replay mode

---

## 🧰 Useful Libraries

| Purpose            | Package                         |
| ------------------ | ------------------------------- |
| Move validation    | `chess.js`                      |
| UI chessboard      | `react-chessboard`              |
| Realtime           | `socket.io`, `socket.io-client` |
| Backend framework  | `express`                       |
| Database           | `mongoose`                      |
| Auth               | `jsonwebtoken`, `bcrypt`        |
| Frontend framework | `react`, `vite`                 |

---

## 💡 Developer Tips

* Keep move validation **server-authoritative**.
* Use `Chess.js` for both client (UX) and server (truth).
* Add JWT verification for socket connections later.
* Persist game states as FEN + move history.
* Handle reconnections gracefully.

---

## 🏁 Next Steps

1. ✅ (Current) Project setup + README
2. 🧩 Setup **Backend boilerplate (Express + Socket.IO + MongoDB)**
3. ♟️ Setup **Frontend chessboard and socket connections**
4. 🔐 Add **auth and matchmaking**
5. ⚔️ Implement **ELO, timers, and lobby UI**

---
