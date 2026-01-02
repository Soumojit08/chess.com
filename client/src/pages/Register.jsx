import { SignUp } from "@clerk/clerk-react";
import { dark } from "@clerk/themes";

const Register = () => {
  return (
    <div className="w-full h-screen bg-background text-foreground flex items-center justify-center">
      <SignUp signInUrl="/login" forceRedirectUrl="/dashboard" appearance={dark}/>
    </div>
  );
};

export default Register;
