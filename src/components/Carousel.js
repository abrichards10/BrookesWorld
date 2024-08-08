import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"; // Import the CSS for styling
import { Row, Col } from "react-bootstrap";
import gif1 from "./assets/Pocket_Python1.gif";
import gif2 from "./assets/Pocket_Python2.gif";
import gif3 from "./assets/Pocket_Python3.gif";
import pic1 from "./assets/Witches1.png";
import pic2 from "./assets/Witches2.png";
import career1 from "./assets/Career_Chatter1.png";
import career2 from "./assets/Career_Chatter2.png";
import career3 from "./assets/Career_Chatter3.png";

const CarouselComponent = () => {
  return (
    <div className="carousel-container">
      <h3 className="titles-app">Mobile App Design and Development</h3>
      <Carousel controls={false}>
        <Carousel.Item className="carousel-item-custom">
          <Row className="d-flex justify-content-center align-items-center h-100">
            <Col xs={1} md={4} className="d-flex justify-content-center">
              <img
                className="d-block iphone-image"
                src={gif1} // Import GIF from assets
                alt="First slide"
              />
            </Col>
            <Col xs={12} md={4} className="d-flex justify-content-center">
              <img
                className="d-block iphone-image"
                src={gif2} // Import GIF from assets
                alt="First slide"
              />
            </Col>
            <Col xs={12} md={4} className="d-flex justify-content-center">
              <img
                className="d-block iphone-image"
                src={gif3} // Import GIF from assets
                alt="First slide"
              />
            </Col>
          </Row>
          {/* <Carousel.Caption>
            <h3>Pocket Python</h3>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item className="carousel-item-custom">
          <Row className="d-flex justify-content-center align-items-center h-100">
            <Col xs={12} md={4} className="d-flex justify-content-center">
              <img
                className="d-block iphone-image"
                src={pic1} // Import GIF from assets
                alt="Second slide"
              />
            </Col>
            <Col xs={12} md={4} className="d-flex justify-content-center">
              <img
                className="d-block iphone-image"
                src={pic2} // Import GIF from assets
                alt="Second slide"
              />
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item className="carousel-item-custom">
          <Row className="d-flex justify-content-center align-items-center h-100">
            <Col xs={12} md={4} className="d-flex justify-content-center">
              <img
                className="d-block iphone-image"
                src={career1} // Import GIF from assets
                alt="Third slide"
              />
            </Col>
            <Col xs={12} md={4} className="d-flex justify-content-center">
              <img
                className="d-block iphone-image"
                src={career2} // Import GIF from assets
                alt="Third slide"
              />
            </Col>
            <Col xs={12} md={4} className="d-flex justify-content-center">
              <img
                className="d-block iphone-image"
                src={career3} // Import GIF from assets
                alt="Third slide"
              />
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
