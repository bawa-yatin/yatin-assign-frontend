/* Main Component File of Main Navbar(just below Contact Bar)  */

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./MainNavbar.css";
import website_icon from "../../assets/images/website_icon.png";

const MainNavbar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="main-navbar-text-size mt-xl-2 mt-lg-2 pt-md-2"
    >
      <Container className="main-text-margin-style">
        <Navbar.Brand href="#" className="pt-xl-2 pt-lg-2 pt-sm-0 navbar-brand">
          <img
            src={website_icon}
            width="35"
            height="35"
            className="d-inline-block align-top website-icon"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto fw-bold">
            <Nav.Link
              href="#"
              className="text-black link-space"
              style={{ marginLeft: "35px" }}
            >
              Laptops
            </Nav.Link>
            <Nav.Link href="#" className="text-black link-space">
              Desktop PCs
            </Nav.Link>
            <Nav.Link href="#" className="text-black link-space">
              Networking Devices
            </Nav.Link>
            <Nav.Link href="#" className="text-black link-space">
              Printers & Scanners
            </Nav.Link>
            <Nav.Link href="#" className="text-black link-space">
              PC Parts
            </Nav.Link>
            <Nav.Link href="#" className="text-black link-space">
              All Other Products
            </Nav.Link>
            <Nav.Link href="#" className="text-black link-space">
              Repairs
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
