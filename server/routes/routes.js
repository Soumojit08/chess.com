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
router.get("/logout", Controller.LogoutController);

export default router;
