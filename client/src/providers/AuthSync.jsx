import { useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import { useDispatch } from "react-redux";
import { setUser, clearUser, setAuthLoading } from "@/features/authSlice";
import { useNavigate, useLocation } from "react-router-dom";

const AuthSync = () => {
  const { isSignedIn, user, isLoaded } = useUser();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

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

      if (["/", "/login", "/register"].includes(location.pathname)) {
        navigate("/dashboard");
      }
    } else {
      dispatch(clearUser());
      console.log("User is not signed in");

      if (["/dashboard", "/profile"].includes(location.pathname)) {
        navigate("/");
      }
    }

    dispatch(setAuthLoading(false));
  }, [isLoaded, isSignedIn, user, dispatch, navigate, location.pathname]);

  return null;
};

export default AuthSync;
