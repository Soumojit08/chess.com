import express from "express";
import Controller from "../controllers/index.controller.js";

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

// create game
router.post("/create-game")

// join game
router.post("/join-game")

// get game
router.get("/get-game")

router.get("/vs-computer")

router.get("/vs-player")

router.get("/get-game-history")



export default router;
