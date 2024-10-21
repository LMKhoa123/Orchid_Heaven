import PropTypes from "prop-types";

function Footer({ isDarkMode }) {
  const baseTextColor = isDarkMode ? "text-gray-200" : "text-gray-800";
  const hoverTextColor = isDarkMode
    ? "hover:text-pink-300"
    : "hover:text-pink-600";
  const bgColor = isDarkMode ? "bg-gray-900" : "bg-green-50";
  const borderColor = isDarkMode ? "border-gray-700" : "border-green-200";

  return (
    <footer className={`py-12 ${bgColor} ${baseTextColor}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-pink-600">
              Orchid Haven
            </h2>
            <p className="mb-4">
              Explore the beauty of natural orchids. Learn more about their
              origins and enjoy our curated collection.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className={`${hoverTextColor} transition-colors duration-300 text-pink-500`}
              >
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a
                href="#"
                className={`${hoverTextColor} transition-colors duration-300 text-pink-500`}
              >
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a
                href="#"
                className={`${hoverTextColor} transition-colors duration-300 text-pink-500`}
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-green-700">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["Home", "Contact Us", "About Us"].map((link) => (
                <li key={link}>
                  <a
                    href={`/${link.toLowerCase().replace(" ", "-")}`}
                    className={`${hoverTextColor} transition-colors duration-300`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-green-700">
              Stay Updated
            </h3>
            <p className="mb-4">
              Subscribe to our newsletter for the latest orchid news and tips.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className={`flex-grow p-2 rounded-l-md focus:outline-none ${
                  isDarkMode
                    ? "bg-gray-800 text-white"
                    : "bg-white text-gray-900"
                }`}
              />
              <button
                type="submit"
                className={`px-4 py-2 rounded-r-md bg-pink-500 text-white font-semibold hover:bg-pink-600 transition-colors duration-300`}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className={`mt-12 pt-8 border-t ${borderColor} text-center`}>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Orchid Haven. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};

export default Footer;
