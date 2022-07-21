import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./ProductPurchase.css";
import React from "react";

const ProductPurchase = () => {
  return (
    <React.Fragment>
      <Container className="spacing-style">
        <Row className="product-text-margin-style">
          <Col xl={8} lg={8} sm={6} className="fw-bold about-product-border">
            About Product
          </Col>

          <Col xl={4} lg={4} sm={6} style={{ textAlign: "right" }}>
            Price <b>&#8377;299.00</b>
            <Button
              variant="primary"
              size="sm"
              className="buy-btn-style fw-bold"
            >
              Buy Now
            </Button>
          </Col>
        </Row>
      </Container>
      <hr className="mb-0 divider-style" />
    </React.Fragment>
  );
};

export default ProductPurchase;
