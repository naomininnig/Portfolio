import { Route, Routes, HashRouter } from "react-router-dom";
import Navbar from "./componenets/Navbar";
import Home from "./pages/Home";
import Footer from "./componenets/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CookieConsent from "react-cookie-consent";

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
      <CookieConsent
        style={{
          background: "#222",
          opacity: "0.9",
          color: "#fff",
          textAlign: "center",
          fontSize: "18px",
        }}
        buttonStyle={{
          backgroundColor: "rgba(204, 24, 87, 1)",
          color: "#fff",
          fontSize: "16px",
          fontWeight: "500",
          borderRadius: "8px",
        }}
        buttonText="Ok Great!"
        expires={150}
      >
        This website uses cookies to ensure you get the best experience on the
        website
      </CookieConsent>
    </>
  );
}

export default App;
