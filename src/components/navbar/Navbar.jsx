// Import necessary Bootstrap components and styles
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

// Define a functional component named NavScrollExample
function NavScrollExample() {
  return (
    // Navbar component with a large breakpoint (lg) and a custom background color
    <Navbar expand="lg" className="bg-body-tertiary">
      {/* Container to hold the content and control the layout */}
      <Container fluid>
        {/* Navbar Brand, Toggle button, and Navbar.Collapse components */}
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          {/* Nav component for navigation links with optional scrolling behavior */}
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {/* Individual navigation links */}
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            {/* NavDropdown for a dropdown menu with multiple links */}
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            {/* Disabled navigation link */}
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          {/* Form component for search bar and Button for search action */}
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// Export the NavScrollExample component as the default export
export default NavScrollExample;
