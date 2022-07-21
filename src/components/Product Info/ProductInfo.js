import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import "./ProductInfo.css";
import React from "react";
import slider_img_1 from "../../assets/images/carousel_img_1.png";
import slider_img_2 from "../../assets/images/carousel_img_2.png";
import slider_img_3 from "../../assets/images/carousel_img_3.png";
import slider_img_4 from "../../assets/images/carousel_img_4.png";

const ProductInfo = () => {
  return (
    <React.Fragment>
      <Row className="mx-0 bottom-margin">
        <Col xl={7} lg={6} sm={12} className="product-desc d-none d-lg-block">
          <div className="my-5 mx-2">
            <span style={{ opacity: "0.5", fontSize: "11px" }}>
              APPLE PRODUCTS
            </span>
            <h4 className="mt-4 mb-3">New Apple AirPods (3rd Generation)</h4>
            <p style={{ fontSize: "12px" }}>It's magic, remastered!</p>
            <ul className="list-space">
              <li>
                Spatial audio with dynamic head tracking places sound all around
                you
              </li>
              <li>Adaptive EQ automatically tunes music to your ears</li>
              <li>All-new contoured design</li>
              <li>
                Force sensor lets you easily control your entertainment, answer
                or end calls, and more
              </li>
              <li>Sweat and water resistant</li>
              <li>Up to 6 hours of listening time with one charge</li>
              <li>
                Up to 30 hours of total listening time with the MagSafe Charging
                Case
              </li>
              <li>Quick access to Siri by saying "Hey Siri"</li>
            </ul>
          </div>
        </Col>

        <Col xl={5} lg={6} sm={12} className="px-0 img slider">
          <Carousel controls={false} interval={1500}>
            <Carousel.Item>
              <img
                className="d-block w-100 img-style"
                src={slider_img_1}
                alt="First Image"
                height="415"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-style"
                src={slider_img_2}
                alt="Second Image"
                height="415"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-style"
                src={slider_img_3}
                alt="Third Image"
                height="415"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100 img-style"
                src={slider_img_4}
                alt="Fourth Image"
                height="415"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default ProductInfo;
