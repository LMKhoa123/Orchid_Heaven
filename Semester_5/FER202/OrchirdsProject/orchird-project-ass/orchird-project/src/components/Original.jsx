import React from "react";
import { useNavigate } from "react-router-dom";
import orchids from "./listOfOrchids";

function Original({ isDarkMode }) {
  const navigate = useNavigate();
  const naturalOrchids = orchids.filter((orchid) => orchid.isSpecial);

  return (
    <div
      className={`py-10 mt-10 min-h-screen ${
        isDarkMode ? "bg-gray-800 text-gray-100" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="container mx-auto px-4">
        <h1 className="text-center mb-10 text-4xl font-bold">
          Natural Orchids
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {naturalOrchids.map((orchid) => (
            <div key={orchid.id} className="bg-white rounded-lg shadow-lg">
              <img
                src={orchid.image}
                alt={orchid.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className={`p-6 ${isDarkMode ? "bg-gray-700" : "bg-white"}`}>
                <h2 className="text-xl font-semibold mb-3">{orchid.name}</h2>
                <p className="mb-3">
                  <strong>Origin:</strong> {orchid.origin}
                </p>
                <p className="mb-6">
                  <strong>Rating:</strong> {orchid.rating}
                </p>
                <button
                  className={`w-full py-2 px-4 rounded-lg ${
                    isDarkMode
                      ? "bg-gray-600 hover:bg-gray-500 text-white"
                      : "bg-blue-500 hover:bg-blue-600 text-white"
                  }`}
                  onClick={() => navigate(`/detail/${orchid.id}`)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Original;
