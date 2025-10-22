import express from "express";
import Controller from "../controllers/index.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/health", (req, res) => {
  res.send("Welcome to the Chess Server API");
});

// login
router.post("/login", Controller.LoginController);

// signup
router.post("/signup", Controller.SignupController);

// logout
router.post("/logout", Controller.LogoutController);

// get user
router.get("/me", authMiddleware, Controller.MeController);

// create game
router.post("/create-game", (req, res) => {
  res.json({ message: "Create game endpoint - to be implemented" });
});

// join game
router.post("/join-game", (req, res) => {
  res.json({ message: "Join game endpoint - to be implemented" });
});

// get game
router.get("/get-game", (req, res) => {
  res.json({ message: "Get game endpoint - to be implemented" });
});

router.get("/vs-computer", (req, res) => {
  res.json({ message: "VS computer endpoint - to be implemented" });
});

router.get("/vs-player", (req, res) => {
  res.json({ message: "VS player endpoint - to be implemented" });
});

router.get("/get-game-history", (req, res) => {
  res.json({ message: "Get game history endpoint - to be implemented" });
});



export default router;
