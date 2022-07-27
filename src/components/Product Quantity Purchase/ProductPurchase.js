/* Main Component File of About Product and Buy Now Component
(Below main Navbar)  */

import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import tick_icon from "../../assets/images/tick_icon.jpg";
import cross_icon from "../../assets/images/cross_icon.jpg";
import "./ProductPurchase.css";
import { API_URL } from "../../config/url";

// Stateful Message Component responsible for displaying success/
// cancellation popup(after successful or incomplete payment)
const Message = ({ messageImage, messageTitle, messageDesc }) => {
  const [show, setShow] = useState(true); // stateful variable for displaying popup
  const handleClose = () => setShow(false);

  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      centered
      className="text-center"
    >
      <Modal.Header closeButton>
        <Modal.Title
          className="d-inline-block h5 fw-bold"
          style={{ marginLeft: "2rem" }}
        >
          <Image
            src={messageImage}
            alt="Successful/Failure Image"
            width="130"
            className="d-block"
            style={{ margin: "0 auto" }}
          ></Image>
          {messageTitle}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="pt-1 pb-5 px-4 modal-body-style">
        {messageDesc}
      </Modal.Body>
    </Modal>
  );
};

const ProductPurchase = () => {
  // Stateful variables for setting popup image, title and description
  // on basis of response returned from backend api
  const [messageImage, setMessageImage] = useState("");
  const [messageTitle, setMessageTitle] = useState("");
  const [messageDesc, setMessageDesc] = useState("");

  useEffect(() => {
    // variable for holding query parameters present in URL
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessageImage(tick_icon);
      setMessageTitle("Purchase Successful");
      setMessageDesc(
        "You will get your product soon -- Get ready to experience the spatial audio with adaptive EQ that tunes music to your ears."
      );
    }

    if (query.get("canceled")) {
      setMessageImage(cross_icon);
      setMessageTitle("Purchase Cancelled");
      setMessageDesc(
        "Order cancelled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);
  return (
    <React.Fragment>
      <Container className="spacing-style">
        <Row className="product-text-margin-style">
          <Col xl={7} lg={7} sm={6} className="fw-bold about-product-border">
            About Product
          </Col>

          <Col xl={5} lg={5} sm={6} style={{ textAlign: "right" }}>
            Price <b>&#8377;299.00</b>
            {/* After quantity is selected customer is redirected
            to stripe checkout form*/}
            <Form
              action={`${API_URL}/api/stripe/create-checkout-session`}
              method="POST"
              style={{ display: "inline-block" }}
              className="form-styles"
            >
              <input
                className="form-input quantity-style"
                id="quantity"
                name="quantity"
                type="number"
                min="1"
                max="10"
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
                className="buy-btn-style fw-bold"
                type="submit"
              >
                Buy Now
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <hr className="mt-xl-4 mt-lg-4 mb-xl-0 mb-lg-0 divider-style" />

      {/* Condition for rendering 'Message' component on basis of data present */}
      {messageImage && messageTitle && messageDesc ? (
        <Message
          messageImage={messageImage}
          messageTitle={messageTitle}
          messageDesc={messageDesc}
        />
      ) : (
        ""
      )}
    </React.Fragment>
  );
};

export default ProductPurchase;
