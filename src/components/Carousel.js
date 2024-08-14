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
import ImageMagnifier from "./ImageMagnifier";

const CarouselComponent = () => {
  return (
    <div className="carousel-container">
      <h3 className="titles-app">Mobile App Design and Development</h3>
      <Carousel>
        <Carousel.Item>
          <Row>
            <Col xs={1} md={4} className="d-flex justify-content-center">
              <ImageMagnifier
                src={gif1}
                alt="Pocket Python 1"
                width={200}
                height={"auto"}
              />
            </Col>
            <Col xs={12} md={4} className="d-flex justify-content-center">
              <ImageMagnifier
                src={gif2}
                imageAlt="Pocket Python 2"
                width={200}
                height={"auto"}
                magnifierHeight={100}
                magnifierWidth={100}
              />
            </Col>
            <Col xs={12} md={4} className="d-flex justify-content-center">
              <ImageMagnifier
                src={gif3}
                imageAlt="Pocket Python 3"
                width={200}
                height={"auto"}
                magnifierHeight={100}
                magnifierWidth={100}
              />
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row className="d-flex justify-content-center align-items-center h-100">
            <Col xs={12} md={4} className="d-flex justify-content-center">
              <ImageMagnifier
                src={pic1}
                imageAlt="Witches 1"
                width={200}
                height={"auto"}
                magnifierHeight={100}
                magnifierWidth={100}
              />
            </Col>
            <Col xs={12} md={4} className="d-flex justify-content-center">
              <ImageMagnifier
                src={pic2}
                imageAlt="Witches 2"
                width={200}
                height={"auto"}
                magnifierHeight={100}
                magnifierWidth={100}
              />
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row>
            <Col xs={12} md={4} className="d-flex justify-content-center">
              <ImageMagnifier
                src={career1}
                imageAlt="Career Chatter 1"
                width={200}
                height={"auto"}
                magnifierHeight={100}
                magnifierWidth={100}
              />
            </Col>
            <Col xs={12} md={4} className="d-flex justify-content-center">
              <ImageMagnifier
                src={career2}
                imageAlt="Career Chatter 2"
                width={200}
                height={"auto"}
                magnifierHeight={100}
                magnifierWidth={100}
              />
            </Col>
            <Col xs={12} md={4} className="d-flex justify-content-center">
              <ImageMagnifier
                src={career3}
                imageAlt="Career Chatter 3"
                width={200}
                height={"auto"}
                magnifierHeight={100}
                magnifierWidth={100}
              />
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
