import Container from 'react-bootstrap/Container';
import logo from "../../Imagens/logo-nav.png";
import { Navbar, Nav } from "react-bootstrap";
import { FaUserAlt } from 'react-icons/fa';
import '../Styles/NavBar.css'
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar  expand="lg" className="nav-edit">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" id='logo-nav' />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="ml-auto">
            <Nav.Link id="link-nav" href="#home">
              Eventos
            </Nav.Link>
            <Nav.Link id="link-nav" href="#link">
              Repositório
            </Nav.Link>
            <Nav.Link id="link-nav" href="#link">
              Contato
            </Nav.Link>
            <div className='link-nav-login'> 
            <Link to="/login">
            <Nav.Link id="link-nav" href="#link">
              Conta ProSen
            </Nav.Link>
            </Link>
            <FaUserAlt id='icon-nav'/>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;