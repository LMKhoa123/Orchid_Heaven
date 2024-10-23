import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import NavBar from "./components/navBar/Navbar";
import Content from "./components/content/Content";
import Detail from "./components/Detail";
import Contact from "./components/Contact";
import Original from "./components/Original";
import Footer from "./components/Footer";
import About from "./components/About";
import Login from "./components/Login";
import { AuthContextProvider, useAuth } from "./components/AuthContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DashBoard from "./components/DashBoard";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      toast.warning("Bạn cần phải đăng nhập trước!");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
  }, [user, navigate]);

  if (user === null) {
    return null;
  }

  return children;
};

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
    //children cung cấp context cho ccacs component con
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
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashBoard isDarkMode={isDarkMode} />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer isDarkMode={isDarkMode} />
      </Router>
    </AuthContextProvider>
  );
}

export default App;
