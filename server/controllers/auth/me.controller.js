import { StatusCodes } from "http-status-codes";
import Models from "../../models/index.models.js";

const meController = async (req, res) => {
  try {
    const user = await Models.UserModel.findById(req.user.id);
    if (!user) {
      return res.status(StatusCodes.NOT_FOUND).json({
        message: "User not found",
      });
    }
    return res.status(StatusCodes.OK).json({
      message: "User found",
      user: user,
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

export default meController;
