import Home from "./pages/Home";
import USP from "./pages/USP";
import Navbar from "./components/Navbar";
import Example from "./components/Example";
import ChatMockup from "./pages/ChatMockup";
export default function App() {
  return (
    <div id="smooth-wrapper">
      <Navbar/>
      <div id="smooth-content">
        <Home />
        {/* <USP /> */}
        <Example/>
        <ChatMockup/>
      </div>
    </div>
  );
}
