import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/logo-01.jpg'
import { Link,Outlet } from 'react-router-dom';

function Navigation() {
  return (
    <>
    <Navbar expand="md" className="main-nav" >
      <Container>
        <Link to="/"><Navbar.Brand ><img src={logo} alt="seda logo" className="logo" /></Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="ABOUT US" id="basic-nav-dropdown">
              <NavDropdown.Item> <Link to="/vision">Our Vision</Link></NavDropdown.Item>
              <NavDropdown.Item>
              <Link to="/mission">Our Mission</Link>
              </NavDropdown.Item>
              <NavDropdown.Item ><Link to="/background">Our Background</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item >
              <Link to="/sponsors">Our Sponsors/Partners</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="WHAT WE DO" id="basic-nav-dropdown">
              <NavDropdown.Item ><Link to="/education">We Educate</Link></NavDropdown.Item>
              <NavDropdown.Item>
              <Link to="/cultivation">We Cultivate</Link>
              </NavDropdown.Item>
              <NavDropdown.Item><Link to="/climate-action">We Take climate Action</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item >
              <Link to="/advocate">We Advocate</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="GET INVOLVED" id="basic-nav-dropdown">
              <NavDropdown.Item ><Link to="/donation">Donation</Link></NavDropdown.Item>
              <NavDropdown.Item >
              <Link to="/volunteer">Volunteer</Link>
              </NavDropdown.Item>
          
              <NavDropdown.Divider />
              <NavDropdown.Item >
              <Link to="/news">News and Events</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet/>
    </>
  );
}

export default Navigation;