import loginController from "./auth/login.controller.js";
import signupController from "./auth/signup.controller.js";
import logoutController from "./auth/logout.controller.js";

const Controller = {
  LoginController: loginController,
  SignupController: signupController,
  LogoutController: logoutController,
};

export default Controller;
