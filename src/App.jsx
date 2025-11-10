import Home from "./pages/Home";
import USP from "./pages/USP";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div id="smooth-wrapper">
      <Navbar/>
      <div id="smooth-content">
        <Home />
        <USP />
      </div>
    </div>
  );
}
