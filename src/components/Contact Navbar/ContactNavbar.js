import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./ContactNavbar.css";

const ContactNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" className="py-1">
      <Container className="text-margin-style">
        <Navbar.Brand className="navbar-text-size">
          <Navbar.Text>Mon-Thu: </Navbar.Text>
          9:00 AM - 5:30 PM
        </Navbar.Brand>
        <Navbar.Toggle />

        <Navbar.Collapse className="justify-content-end navbar-text-size">
          <Navbar.Text className="text-white">
            Call Us: (00) 1234 5678
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default ContactNavbar;
