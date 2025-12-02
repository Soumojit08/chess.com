import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Preloader from "./components/Preloader";

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="h-screen w-full bg-obsidian text-foreground relative">
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
