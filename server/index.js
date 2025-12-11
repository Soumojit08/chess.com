import express from "express";
import dotenv from "dotenv";
import router from "./routes/routes.js";
import connectDB, { sql } from "./utils/db.js";
import { Server } from "socket.io";
import http from "http";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();
const PORT = process.env.PORT;
const server = http.createServer(app);
const io = new Server(server);
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1", router);
app.use(cors());
app.use(cookieParser());

app.get("/data", async (req, res) => {
  try {
    const data = await sql`SELECT * FROM users`;
    res.json({ data: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
 
io.on("connection", (socket) => {
  console.log("A user connected: " + socket.id);
});

server.listen(PORT, () => {
  console.log(`Server is running on port  ${PORT}`);
});