import { SignIn } from "@clerk/clerk-react";

const Login = () => {
  return (
    <div className="w-full h-screen bg-background text-foreground flex items-center justify-center">
      <SignIn signUpUrl="/register" forceRedirectUrl="/dashboard" />
    </div>
  );
};

export default Login;
