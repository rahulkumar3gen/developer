import "./App.css";
import "./style.css";
import Lenis from "lenis";

import About from "./components/About";
import Cylinder from "./components/Cylinder";
import Sphere from "./components/Sphere";
import { useEffect } from "react";
import Zoom from "./components/Zoom";
import Contact from "./components/Contact";
import Home from "./components/Page";
import Page from "./components/Page";
import Mouse from "./components/Mouse";
import Horizontal from "./components/Horizontal";
import Fed from "./components/Fed";
import Navbar from "./components/Navbar";
import Whatsapp from "./components/Whatsapp";
function App() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <div className="bg-black">
      <Whatsapp />
      <Navbar />
      <Cylinder />
      <About />
      <Sphere />
      <Zoom />
      <div className="bg-black h-[120vh] relative">
        <Mouse />
      </div>
      {/* <Page /> */}

      <Fed />

      <Horizontal />
      <Contact />
    </div>
  );
}

export default App;
