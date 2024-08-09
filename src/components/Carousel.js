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
import Magnifier from "react-magnifier";

const CarouselComponent = () => {
  return (
    <div className="carousel-container">
      <h3 className="titles-app">Mobile App Design and Development</h3>
      <Carousel>
        <Carousel.Item>
          <Row>
            <Col xs={1} md={4} className="d-flex justify-content-center">
              <Magnifier src={gif1} />
            </Col>
            <Col xs={12} md={4} className="d-flex justify-content-center">
              <Magnifier src={gif2} width={500} />
            </Col>
            <Col xs={12} md={4} className="d-flex justify-content-center">
              <Magnifier src={gif3} width={500} />
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row className="d-flex justify-content-center align-items-center h-100">
            <Col xs={12} md={4} className="d-flex justify-content-center">
              <Magnifier src={pic1} width={500} />
            </Col>
            <Col xs={12} md={4} className="d-flex justify-content-center">
              <Magnifier src={pic2} width={500} />
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row>
            <Col xs={12} md={4} className="d-flex justify-content-center">
              <Magnifier src={career1} width={500} />
            </Col>
            <Col xs={12} md={4} className="d-flex justify-content-center">
              <Magnifier src={career2} width={500} />
            </Col>
            <Col xs={12} md={4} className="d-flex justify-content-center">
              <Magnifier src={career3} width={500} />
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
