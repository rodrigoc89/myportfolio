import NavbarHome from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Footer from "./components/Footer";

import "./css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/icons.css";

function App() {
  return (
    <>
      <NavbarHome />
      <Home />
      <About />
      <Technologies />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
