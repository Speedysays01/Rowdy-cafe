import { useState } from "react";
import Home from "./pages/Home";
import USP from "./pages/USP";
import Navbar from "./components/Navbar";
import Example from "./components/Example";
import ChatMockup from "./pages/ChatMockup";
import Loader from "./components/Loader";
import Slider from "./components/Slider";
import ROI from "./components/ROI";
import OwnerCard from "./pages/OwnerCard";
import Investment from "./pages/Investment";
export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <Loader onComplete={() => setLoaded(true)} />}
      {loaded && (
        <div id="smooth-wrapper">
          <Navbar />
          <div id="smooth-content">
            <Home />
            <Slider/>
            <OwnerCard/>
          <Investment/>
          <ROI/>
          </div>
        </div>
      )}
    </>
  );
}
