import { useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import { useDispatch } from "react-redux";
import { setUser, clearUser, setAuthLoading } from "@/features/authSlice";

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
      console.log("Signed In");
    } else {
      dispatch(clearUser());
      console.log("Not Signed In");
    }

    dispatch(setAuthLoading(false));
  }, [isLoaded, isSignedIn, user, dispatch]);

  return null;
};

export default AuthSync;
