import {
  SignIn,
  SignInButton,
  SignUp,
  SignUpButton,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";

const User = () => {
  return (
    <div className="h-screen w-full bg-obsidian text-foreground relative flex items-center justify-center">
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <SignUpButton />
      </SignedIn>
    </div>
  );
};

export default User;
