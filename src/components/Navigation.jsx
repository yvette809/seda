import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/logo-01.jpg'

function Navigation() {
  return (
    <Navbar expand="lg" className="main-nav" >
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt="seda logo" class="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="ABOUT US" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Our Vision</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Our Mission
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Our Background</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              Our Sponsors/Partners
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="WHAT WE DO" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">We Educate</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
               We Cultivate
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">We Take Climate Action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                We Advocate
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="GET INVOLVED" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Donate</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Volunteer
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">We Take Climate Action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
               News & Events
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">HOME</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;