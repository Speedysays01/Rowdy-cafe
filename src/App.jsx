import { useState } from "react";
import Home from "./pages/Home";
import USP from "./pages/USP";
import Navbar from "./components/Navbar";
import Example from "./components/Example";
import ChatMockup from "./pages/ChatMockup";
import Loader from "./components/Loader";

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
            {/* <USP /> */}
            <Example />
            {/* <ChatMockup/> */}
          </div>
        </div>
      )}
    </>
  );
}
