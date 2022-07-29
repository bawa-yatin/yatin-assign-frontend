/* Main Component File of Product Information and Images Component
(Below About and Buy Now Component)  */

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import "./ProductInfo.css";
import React from "react";
import { API_URL } from "../../config/url";
import slider_img_1 from "../../assets/images/carousel_img_1.png";
import slider_img_2 from "../../assets/images/carousel_img_2.png";
import slider_img_3 from "../../assets/images/carousel_img_3.png";
import slider_img_4 from "../../assets/images/carousel_img_4.png";

const ProductInfo = () => {
  const product_feature_list = [
    "Spatial audio with dynamic head tracking places sound all around you",
    "Adaptive EQ automatically tunes music to your ears",
    "All-new contoured design",
    "Force sensor lets you easily control your entertainment, answer or end calls, and more",
    "Sweat and water resistant",
    "Up to 6 hours of listening time with one charge",
    "Up to 30 hours of total listening time with the MagSafe Charging Case",
    "Quick access to Siri by saying 'Hey Siri'",
  ];

  return (
    <React.Fragment>
      <Row className="mx-0 bottom-margin">
        <Col
          xl={{ span: 7, order: 1 }}
          lg={{ span: 6, order: 1 }}
          md={{ span: 6, order: 1 }}
          sm={{ span: 12, order: 2 }}
          xs={{ span: 12, order: 2 }}
          className="product-desc"
        >
          <div className="mx-lg-2 mx-md-2 mx-xl-0 content-spacing">
            <p className="fw-bold product-border d-xl-none d-lg-none d-md-block d-sm-block d-xs-block">
              About Product
            </p>
            <span
              className="d-xl-block d-lg-block d-md-none d-sm-none d-none"
              style={{ opacity: "0.5", fontSize: "11px" }}
            >
              APPLE PRODUCTS
            </span>
            <h4 className="mb-3 product-title fw-bold">
              New Apple AirPods (3rd Generation)
            </h4>
            <p style={{ fontSize: "13px" }}>It's magic, remastered!</p>
            <ul className="list-space">
              {product_feature_list.map((feature) => (
                <li>{feature}</li>
              ))}
            </ul>
          </div>
        </Col>

        <Col
          xl={{ span: 5, order: 2 }}
          lg={{ span: 6, order: 2 }}
          md={{ span: 6, order: 2 }}
          sm={{ span: 12, order: 1 }}
          xs={{ span: 12, order: 1 }}
          className="img slider"
        >
          <Container className="space-style">
            <Carousel controls={false} interval={500} fade>
              <Carousel.Item>
                <img
                  className="d-block w-100 img-style"
                  src={slider_img_1}
                  alt="First Image"
                  height="385"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 img-style"
                  src={slider_img_2}
                  alt="Second Image"
                  height="385"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 img-style"
                  src={slider_img_3}
                  alt="Third Image"
                  height="385"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100 img-style"
                  src={slider_img_4}
                  alt="Fourth Image"
                  height="385"
                />
              </Carousel.Item>
            </Carousel>
          </Container>
        </Col>
      </Row>
      <div className="d-xl-none d-lg-none d-md-block d-sm-block d-xs-block price-card">
        <div className="mx-sm-4 pt-3 pb-2 mx-3">
          <p
            className="d-sm-inline-block d-inline-block"
            style={{ marginTop: "0.8rem" }}
          >
            Price <b>&#8377;299.00</b>
          </p>
          <Form
            action={`${API_URL}/api/stripe/create-checkout-session`}
            method="POST"
            style={{ display: "inline-block", float: "right" }}
          >
            <input
              className="form-input quantity-style"
              id="quantity"
              name="quantity"
              type="number"
              min="1"
              max="3"
              defaultValue="1"
              required
            />
            <input
              className="form-input"
              id="product_name"
              name="product"
              type="text"
              value="New Apple AirPods (3rd Generation)"
              hidden
            />
            <Button
              variant="primary"
              size="sm"
              className="buy-btn-style fw-bold mb-3"
              type="submit"
            >
              Buy Now
            </Button>
          </Form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductInfo;
