import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Preloader from "./components/Preloader";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import { Toaster } from "react-hot-toast";
import AuthSync from "./providers/AuthSync";

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="h-screen w-full bg-obsidian text-foreground relative">
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <AuthSync />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
