import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Preloader from "./components/Preloader";
import User from "./pages/User";

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="h-screen w-full bg-obsidian text-foreground relative">
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </div>
  );
};

export default App;
