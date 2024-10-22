import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../config/axios";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import Aos from "aos";

function Original({ isDarkMode }) {
  // const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [orchids, setOrchids] = useState([]);
  const naturalOrchids = orchids.filter((orchid) => orchid.isSpecial);
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
    });
    const fetchOrchids = async () => {
      try {
        const response = await api.get("orchidList");
        setOrchids(response.data);
      } catch (error) {
        console.log("fetching error" + error);
      }
    };
    fetchOrchids();
  }, []);
  // Filter orchids based on search term and category
  const filteredOrchids = naturalOrchids.filter((orchid) => {
    return (
      orchid.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "" || orchid.category === selectedCategory)
    );
  });
  // Get unique categories for the filter dropdown
  const categories = [
    ...new Set(naturalOrchids.map((orchid) => orchid.category)),
  ];
  return (
    <Container
      fluid
      className={`py-5 mt-5 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-green-50 text-gray-900"
      }`}
    >
      <Container>
        {/* Search Input */}
        <Row className="mb-4">
          <Col md={6}>
            <Form.Control
              type="text"
              placeholder="Search by orchid name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="shadow-md"
            />
          </Col>
          {/* Category Filter */}
          <Col md={6}>
            <Form.Control
              as="select"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="shadow-md"
            >
              <option value="">All Categories</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </Form.Control>
          </Col>
        </Row>

        {/* Display Orchids */}
        <Row>
          {filteredOrchids.map((orchid, index) => (
            <Col
              key={orchid.id}
              lg={3}
              md={4}
              sm={6}
              className="mb-4"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <Card className="shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 bg-white relative">
                {orchid.isSpecial ? (
                  <span className="absolute top-0 right-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-2 py-1 rounded-bl-md text-xs font-semibold transform rotate-6 shadow-md">
                    Special
                  </span>
                ) : (
                  " "
                )}
                <Card.Img
                  variant="top"
                  src={orchid.image}
                  alt={orchid.name}
                  className="h-48 object-cover"
                />
                <Card.Body className="flex flex-col justify-between">
                  {/* //line-clamp-1:  để cắt bớt nội dung hiển thị thành ...*/}
                  <Card.Title className="text-lg font-semibold text-purple-600 line-clamp-1">
                    {orchid.name}
                  </Card.Title>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-sm text-green-600">
                      {orchid.origin}
                    </span>
                    <span className="text-yellow-500 flex items-center">
                      {orchid.rating}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        width="20"
                        height="20"
                        className="ml-1"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>
                  <Link
                    to={`/detail/${orchid.id}`}
                    className="mt-2 bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white px-4 py-2 rounded-md text-center transition-colors duration-200"
                  >
                    Detail
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
    // <div
    //   className={`py-10 mt-10 min-h-screen ${
    //     isDarkMode ? "bg-gray-800 text-gray-100" : "bg-gray-100 text-gray-900"
    //   }`}
    // >
    //   <div className="container mx-auto px-4">
    //     <h1 className="text-center mb-10 text-4xl font-bold">
    //       Natural Orchids
    //     </h1>
    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    //       {naturalOrchids.map((orchid) => (
    //         <div key={orchid.id} className="bg-white rounded-lg shadow-lg">
    //           <img
    //             src={orchid.image}
    //             alt={orchid.name}
    //             className="w-full h-48 object-cover rounded-t-lg"
    //           />
    //           <div className={`p-6 ${isDarkMode ? "bg-gray-700" : "bg-white"}`}>
    //             <h2 className="text-xl font-semibold mb-3">{orchid.name}</h2>
    //             <p className="mb-3">
    //               <strong>Origin:</strong> {orchid.origin}
    //             </p>
    //             <p className="mb-6">
    //               <strong>Rating:</strong> {orchid.rating}
    //             </p>
    //             <button
    //               className={`w-full py-2 px-4 rounded-lg ${
    //                 isDarkMode
    //                   ? "bg-gray-600 hover:bg-gray-500 text-white"
    //                   : "bg-blue-500 hover:bg-blue-600 text-white"
    //               }`}
    //               onClick={() => navigate(`/detail/${orchid.id}`)}
    //             >
    //               View Details
    //             </button>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
  );
}

export default Original;
