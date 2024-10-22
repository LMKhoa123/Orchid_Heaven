import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/navBar/Navbar";
import Content from "./components/content/Content";
import Detail from "./components/Detail";
import Contact from "./components/Contact";
import Original from "./components/Original";
import Footer from "./components/Footer"; // Import Footer component
import About from "./components/About";
import Login from "./components/Login"; // Make sure this import is correct
import { AuthContextProvider } from "./components/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode !== null) {
      setIsDarkMode(savedMode === "true");
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", newMode.toString());
      return newMode;
    });
  };

  return (
    <AuthContextProvider>
      <Router>
        <ToastContainer position="top-right" autoClose={1500} />
        <NavBar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={<Content isDarkMode={isDarkMode} />} />
          <Route
            path="/detail/:id"
            element={<Detail isDarkMode={isDarkMode} />}
          />
          <Route
            path="natural/detail/:id"
            element={<Detail isDarkMode={isDarkMode} />}
          />
          <Route
            path="/contact"
            element={<Contact isDarkMode={isDarkMode} />}
          />
          <Route
            path="/natural"
            element={<Original isDarkMode={isDarkMode} />}
          />
          <Route path="/about" element={<About isDarkMode={isDarkMode} />} />
          <Route path="/login" element={<Login isDarkMode={isDarkMode} />} />
        </Routes>
        <Footer isDarkMode={isDarkMode} />
      </Router>
    </AuthContextProvider>
  );
}

export default App;
