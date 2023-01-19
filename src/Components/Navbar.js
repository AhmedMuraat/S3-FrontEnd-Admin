import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbarr() {
  const LogOut = () => {
    localStorage.removeItem("Token")
    window.location.replace("/Login")
  }

  return (
    <Navbar bg="dark" expand="lg" >
      <Container fluid >
        <Navbar.Brand className='text-light' href="/">MusicApp</Navbar.Brand>
        <Navbar.Toggle  aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='text-light' href="/Albums">Albums</Nav.Link>
            <Nav.Link className='text-light' href="/Tracks">Tracks</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Button variant="outline-danger" onClick={LogOut}>Log Out</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;