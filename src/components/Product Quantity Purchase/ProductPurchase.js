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

const Message = ({ messageImage, messageTitle, messageDesc }) => {
  const [show, setShow] = useState(true);
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
  const [messageImage, setMessageImage] = useState("");
  const [messageTitle, setMessageTitle] = useState("");
  const [messageDesc, setMessageDesc] = useState("");

  useEffect(() => {
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
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);
  return (
    <React.Fragment>
      <Container className="spacing-style">
        <Row className="product-text-margin-style">
          <Col xl={8} lg={8} sm={6} className="fw-bold about-product-border">
            About Product
          </Col>

          <Col xl={4} lg={4} sm={6} style={{ textAlign: "right" }}>
            Price <b>&#8377;299.00</b>
            <Form
              action={`${API_URL}/api/stripe/create-checkout-session`}
              method="POST"
              style={{ display: "inline-block" }}
            >
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
      <hr className="mb-0 divider-style" />

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
