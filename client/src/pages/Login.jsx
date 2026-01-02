import { SignIn } from "@clerk/clerk-react";
import { dark } from "@clerk/themes";

const Login = () => {
  return (
    <div className="w-full h-screen bg-background text-foreground flex items-center justify-center">
      <SignIn
        signUpUrl="/register"
        forceRedirectUrl="/dashboard"
        appearance={dark}
      />
    </div>
  );
};

export default Login;
