import Models from "../../models/index.models.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"
import { StatusCodes } from "http-status-codes";

const loginController = async (req, res) => {
  const { username, password } = req.body;

  const user = await Models.UserModel.findOne({ username: username });

  if (!user) {
    return res.status(StatusCodes.NOT_FOUND).json({
      message: "Invalid Credentials",
    });
  }

  const isPasswordCorrect = await bcrypt.compare(password, user.password);

  if (!isPasswordCorrect) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      message: "Invalid Credentials",
    });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  res.cookie("token", token, {
    httpOnly: true,
    maxAge: 15 * 24 * 60 * 60 * 1000,
  });

  return res.status(StatusCodes.OK).json({ message: "Login successful" });
};

export default loginController;
