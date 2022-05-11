import { Route, Routes, HashRouter } from "react-router-dom";
import Navbar from "./componenets/Navbar";
import Home from "./pages/Home";
import Footer from "./componenets/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
