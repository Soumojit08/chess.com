import Models from "../../models/index.models.js";
import {StatusCodes} from "http-status-codes"
import bcrypt from "bcrypt"

const signupController = async (req, res) => {
  const {fullname, username, password, createdAt} = req.body;

  if(!fullname || !username || !password) {
    return res.status(StatusCodes.EXPECTATION_FAILED).json({
      message: "All fields are required"
    })
  }

  const existingUser = await Models.UserModel.findOne({
    username: username
  })

  if(existingUser){
    return res.status(StatusCodes.CONFLICT).json({
      message: "User already exists"
    })
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await Models.UserModel.create({
    fullname: fullname,
    username: username,
    password: hashedPassword,
    createdAt: createdAt
  })

  await user.save();

  return res.status(StatusCodes.CREATED).json({
    message: "User created successfully",
    user: user
  })
};
export default signupController;
