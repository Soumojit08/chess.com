import express from "express";
import dotenv from "dotenv";
import router from "./routes/routes.js";
import connectDB from "./utils/db.js";
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
 
io.on("connection", (socket) => {
  console.log("A user connected: " + socket.id);
});

server.listen(PORT, () => {
  console.log(`Server is running on port  ${PORT}`);
});