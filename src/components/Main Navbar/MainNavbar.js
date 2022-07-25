import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import icon from "../../assets/images/website_icon.png";
import "./MainNavbar.css";

const MainNavbar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="main-navbar-text-size mt-xl-2 mt-lg-2"
    >
      <Container className="main-text-margin-style">
        <Navbar.Brand href="#">
          <img
            src={icon}
            height="32"
            alt="Website Icon"
            className="icon-style"
          />
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
