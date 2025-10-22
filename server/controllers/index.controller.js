import loginController from "./auth/login.controller.js";
import signupController from "./auth/signup.controller.js";
import logoutController from "./auth/logout.controller.js";
import meController from "./auth/me.controller.js";

const Controller = {
  LoginController: loginController,
  SignupController: signupController,
  LogoutController: logoutController,
  MeController: meController,
};

export default Controller;
