import { useParams, useNavigate } from "react-router-dom";
import { FaVideo } from "react-icons/fa"; // Import the video icon
import orchids from "./listOfOrchids";
import { useState } from "react";
import ModalCase from "./ModalCase"; // Import the ModalCase component

function Detail({ isDarkMode }) {
  const { id } = useParams(); // Get the id param from the URL
  const navigate = useNavigate();
  const orchid = orchids.find((o) => o.id === parseInt(id));
  const [isOpen, setIsOpen] = useState(false);

  if (!orchid) {
    return <div>Orchid not found</div>;
  }

  return (
    <div
      className={`py-10 mt-10 min-h-screen ${
        isDarkMode ? "bg-gray-900 text-gray-100" : "bg-green-50 text-gray-900"
      }`}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src={orchid.image}
              alt={orchid.name}
              className="w-full h-auto object-cover rounded-lg shadow-lg"
              style={{ width: "456px", height: "456px" }}
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-4 text-purple-600">
              {orchid.name}
            </h2>
            <p className="mb-2">
              <strong className="text-green-600">Origin:</strong>{" "}
              {orchid.origin}
            </p>
            <p className="mb-2">
              <strong className="text-green-600">Rating:</strong>{" "}
              {orchid.rating}
            </p>
            <p className="mb-6">
              <strong className="text-green-600">Description:</strong> Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button
              className={`${
                isDarkMode
                  ? "bg-green-500 hover:bg-green-600 text-white"
                  : "bg-green-600 hover:bg-green-700 text-white"
              } py-2 px-4 rounded-lg flex items-center space-x-2 mb-4 transition-colors duration-200`}
              onClick={() => setIsOpen(true)}
            >
              <FaVideo />
              <span>Watch Video</span>
            </button>
            <button
              className={`${
                isDarkMode
                  ? "bg-purple-500 hover:bg-purple-600 text-white"
                  : "bg-purple-600 hover:bg-purple-700 text-white"
              } py-2 px-4 rounded-lg transition-colors duration-200`}
              onClick={() => navigate("/")}
            >
              Return to Homepage
            </button>
          </div>
        </div>
        <ModalCase isOpen={isOpen} setIsOpen={setIsOpen} orchid={orchid} />
      </div>
    </div>
  );
}

export default Detail;
