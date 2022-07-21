import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
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
        <Col
          xl={{ span: 7, order: 1 }}
          lg={{ span: 6, order: 1 }}
          md={{ span: 12, order: 2 }}
          sm={{ span: 12, order: 2 }}
          xs={{ span: 12, order: 2 }}
          className="product-desc"
        >
          <div className="mx-2 mx-xl-0 content-spacing">
            <p className="fw-bold product-border d-xl-none d-lg-none d-md-block d-sm-block d-xs-block">
              About Product
            </p>
            <span
              className="d-xl-block d-lg-block d-md-none d-sm-none d-none"
              style={{ opacity: "0.5", fontSize: "11px" }}
            >
              APPLE PRODUCTS
            </span>
            <h4 className="mt-4 mb-3">New Apple AirPods (3rd Generation)</h4>
            <p style={{ fontSize: "14px" }}>It's magic, remastered!</p>
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

        <Col
          xl={{ span: 5, order: 2 }}
          lg={{ span: 6, order: 2 }}
          md={{ span: 12, order: 1 }}
          sm={{ span: 12, order: 1 }}
          xs={{ span: 12, order: 1 }}
          className="px-0 img slider"
        >
          <Carousel controls={false} interval={1500}>
            <Carousel.Item>
              <img
                className="d-block w-100 img-style"
                src={slider_img_1}
                alt="First Image"
                height="470"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-style"
                src={slider_img_2}
                alt="Second Image"
                height="470"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-style"
                src={slider_img_3}
                alt="Third Image"
                height="470"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100 img-style"
                src={slider_img_4}
                alt="Fourth Image"
                height="470"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <div className="d-xl-none d-lg-none d-md-block d-sm-block d-xs-block price-card">
        <div className="mt-sm-3 mx-sm-4 py-3 mx-3">
          <p className="d-sm-inline-block d-inline-block mt-sm-2 my-2">
            Price <b>&#8377;299.00</b>
          </p>
          <Button
            variant="primary"
            size="sm"
            className="purchase-btn-style fw-bold d-sm-inline-block"
            style={{ float: "right" }}
          >
            Buy Now
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductInfo;
