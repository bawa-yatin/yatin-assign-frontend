/* Main Component File of Main Navbar(just below Contact Bar)  */

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { GiBoxUnpacking } from "react-icons/gi";
import "./MainNavbar.css";

const MainNavbar = () => {
  // CSS Styles for Navbar Icon
  const style = { color: "blue", fontSize: "1.8em" };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="main-navbar-text-size mt-xl-2 mt-lg-2 pt-md-2"
    >
      <Container className="main-text-margin-style">
        <Navbar.Brand href="#" className="pt-md-0">
          <GiBoxUnpacking className="icon-style" style={style} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto fw-bold">
            <Nav.Link
              href="#"
              className="text-black link-space"
              style={{ marginLeft: "20px" }}
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
