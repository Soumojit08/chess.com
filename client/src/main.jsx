import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import { dark } from "@clerk/themes";
import { Provider } from "react-redux";
import { useAuthStore } from "./store/useAuthStore";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Clerk Publishable Key");
}

createRoot(document.getElementById("root")).render(
  <Provider store={useAuthStore}>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} theme={{ dark }}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ClerkProvider>
  </Provider>
);
