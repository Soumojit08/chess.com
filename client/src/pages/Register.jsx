import { SignUp } from "@clerk/clerk-react";

const Register = () => {
  return (
    <div className="w-full h-screen bg-background text-foreground flex items-center justify-center">
      <SignUp signInUrl="/login" forceRedirectUrl="/dashboard" />
    </div>
  );
};

export default Register;
