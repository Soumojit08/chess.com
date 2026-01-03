import { useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import { useDispatch } from "react-redux";
import { setUser, clearUser, setAuthLoading } from "@/features/authSlice";
import toast from "react-hot-toast";

const AuthSync = () => {
  const { isSignedIn, user, isLoaded } = useUser();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoaded) return;

    if (isSignedIn) {
      dispatch(
        setUser({
          clerkId: user.id,
          email: user.primaryEmailAddress?.emailAddress,
          firstName: user.firstName,
          lastName: user.lastName,
          avatar: user.imageUrl,
        })
      );
      console.log("User : " + user.fullName);
      toast.success("Logged in successfully");
    } else {
      dispatch(clearUser());
      toast.success("Logged out successfully");
      console.log("User is not signed in");
    }

    dispatch(setAuthLoading(false));
  }, [isLoaded, isSignedIn, user, dispatch]);

  return null;
};

export default AuthSync;
