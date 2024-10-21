import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaLeaf, FaHeart, FaSeedling } from "react-icons/fa";

const About = () => {
  return (
    <Container className="py-12 px-4 sm:px-6 lg:px-8 mt-10">
      <Row className="text-center mb-12">
        <Col>
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About Our Orchid Heaven
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Discover the beauty and diversity of orchids with us
          </p>
        </Col>
      </Row>

      <Row className="mb-12">
        <Col md={6} className="mb-8 md:mb-0">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy--sIxrwkMIbVuliB3m9MGxhP4RCiPD14Iw&s"
            alt="Beautiful Orchid"
            className="rounded-lg shadow-lg w-full h-auto mb-4 d-none d-sm-none d-md-block d-lg-none d-xl-none"
          />
          <img
            src="https://i.pinimg.com/736x/5f/20/c1/5f20c10d8d4af2568717a23599101103.jpg"
            alt="Beautiful Orchid"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </Col>
        <Col md={6} className="flex flex-col justify-center">
          <p className="text-lg text-gray-700 mb-4">
            Welcome to our orchid sanctuary, where passion meets nature's
            elegance. Our journey began with a simple love for these exquisite
            flowers and has blossomed into a haven for orchid enthusiasts and
            curious minds alike.
          </p>
          <p className="text-lg text-gray-700">
            We are dedicated to sharing our knowledge, showcasing rare species,
            and fostering a community that appreciates the delicate beauty of
            orchids. Join us in exploring the fascinating world of these
            remarkable plants.
          </p>
        </Col>
      </Row>

      <Row className="text-center">
        {[
          {
            icon: FaLeaf,
            title: "Diverse Collection",
            description:
              "Explore our wide variety of orchid species from around the world.",
          },
          {
            icon: FaHeart,
            title: "Passionate Experts",
            description:
              "Our team of dedicated professionals is here to share knowledge and answer your questions.",
          },
          {
            icon: FaSeedling,
            title: "Sustainable Practices",
            description:
              "We are committed to ethical sourcing and environmentally friendly cultivation methods.",
          },
        ].map((feature, index) => (
          <Col key={index} md={4} className="mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col items-center">
              <feature.icon className="text-4xl text-green-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default About;
