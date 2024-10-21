import { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function NavBar({ isDarkMode, toggleDarkMode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <Navbar
      bg={isDarkMode ? "dark" : "light"}
      variant={isDarkMode ? "dark" : "light"}
      expand="lg"
      fixed="top"
      className={`transition-all duration-300 ease-in-out py-3 ${
        scrolled ? "shadow-lg" : ""
      } ${isDarkMode ? "bg-gray-900" : "bg-green-100"}`}
    >
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          className={`text-xl font-bold transition-transform transform hover:scale-105 ${
            isDarkMode ? "text-purple-300" : "text-purple-700"
          }`}
        >
          Orchid Heaven
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/"
              className={`mx-2 text-base font-medium transition-colors duration-200 ${
                isDarkMode
                  ? "text-green-300 hover:text-green-100"
                  : "text-green-700 hover:text-green-900"
              }`}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/natural"
              className={`mx-2 text-base font-medium transition-colors duration-200 ${
                isDarkMode
                  ? "text-green-300 hover:text-green-100"
                  : "text-green-700 hover:text-green-900"
              }`}
            >
              Special
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              className={`mx-2 text-base font-medium transition-colors duration-200 ${
                isDarkMode
                  ? "text-green-300 hover:text-green-100"
                  : "text-green-700 hover:text-green-900"
              }`}
            >
              Contact
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              className={`mx-2 text-base font-medium transition-colors duration-200 ${
                isDarkMode
                  ? "text-green-300 hover:text-green-100"
                  : "text-green-700 hover:text-green-900"
              }`}
            >
              About
            </Nav.Link>
            <Button
              onClick={toggleDarkMode}
              variant={isDarkMode ? "light" : "dark"}
              size="sm"
              className={`ml-2 ${
                isDarkMode
                  ? "bg-purple-300 text-gray-900"
                  : "bg-purple-600 text-white"
              }`}
            >
              {isDarkMode ? "Light" : "Dark"}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
