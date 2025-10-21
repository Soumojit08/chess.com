import { StatusCodes } from "http-status-codes";

const logoutController = async (req, res) => {
  res.cookie("token", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  return res.status(StatusCodes.OK).json({ message: "Logout successful" });
};
export default logoutController;
