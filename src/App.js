import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button, Image, Modal, InputGroup } from 'react-bootstrap';
import { Parallax, Background } from 'react-parallax';

let name = " ";
let password = " ";


function onNameInput(event) {
  name = event.target.value;
}

function onPasswordInput(event) {
  password = event.target.value;
}

function onLogin() {
  console.log("Name: " + name);
  console.log("Password: " + password);
}


function App() {

  let [show, setShow] = React.useState(false);
  let handleShow = () => setShow(true);
  let handleClose = () => setShow(false);
  let handleLogin = () => {
    onLogin();
    handleClose();
  }

    return(
      <>
        <Navbar bg="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#start">Startseite</Nav.Link>
                <NavDropdown title="Geschichte" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#erstes-zeitalter">Erstes Zeitalter</NavDropdown.Item>
                  <NavDropdown.Item href="#zweites-zeitalter">Zweites Zeitalter</NavDropdown.Item>
                  <NavDropdown.Item href="#drittes-zeitalter">Drittes Zeitalter</NavDropdown.Item>
                  <NavDropdown.Item href="#viertes-zeitalter">Viertes Zeitalter</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Orte und Länder" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#orte-und-laender-erstes-zeitalter">Erstes Zeitalter</NavDropdown.Item>
                  <NavDropdown.Item href="#orte-und-laender-zweites-zeitalter">Zweites Zeitalter</NavDropdown.Item>
                  <NavDropdown.Item href="#orte-und-laender-drittes-zeitalter">Drittes Zeitalter</NavDropdown.Item>
                  <NavDropdown.Item href="#orte-und-laender-viertes-zeitalter">Viertes Zeitalter</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
                <Button variant="outline-success" onClick={handleShow}>Login</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container className="app" fluid={false}>
          <Row>
            <Col className="col1">
              <Row>
                <h1>Ein großer Baum...</h1>
                <img src="https://tse3.mm.bing.net/th?id=OIP.vZINCIW4jCLh4U1yfnv8YQHaHa&pid=Api&P=0&w=300&h=300" />
              </Row>
            </Col>
            <Col className="col2">
              <ul className="liste">
                <li>Ein Baum im Frühling:</li>
                <li><img src="https://tse4.mm.bing.net/th?id=OIP.Yrwc89v2Hkfmlij3Gmqd0QHaFj&pid=Api&P=0&w=215&h=162" /></li>
                <li>Ein Baum im Sommer:</li>
                <li><img src="https://tse3.mm.bing.net/th?id=OIP.vZINCIW4jCLh4U1yfnv8YQHaHa&pid=Api&P=0&w=300&h=300" /></li>
                <li>Ein Baum im Herbst:</li>
                <li><img src="https://tse1.mm.bing.net/th?id=OIP.il_dOWFcSDa7iY3oQvPw2AHaJF&pid=Api&P=0&w=300&h=300" /></li>
                <li>Ein Baum im Winter</li>
                <li><img src="https://tse2.mm.bing.net/th?id=OIP.DdwyUETdN7vskRxwYiR48wHaEz&pid=Api&P=0&w=280&h=182" /></li>
              </ul>
              <p>
                Ich hab leider keine Ahnung von Bäumen, deswegen zeige ich euch Offensichtliches.<br />
                Leider sehen die ersten beiden Bilder vollkommen gleich aus...
          </p>
            </Col>
          </Row>

          <Parallax strength={-800} bgImage={require('./tree.jpg')}>
            <div style={{ height: "200px" }} />
          </Parallax>
          <div style={{ height: '1000px' }} />


          <Modal show={show} onHide={() => handleClose()}>
            <Modal.Header closeButton>
              <Modal.Title>Bitte melde dich an!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>Name</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl onChange={onNameInput} />
              </InputGroup>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>Passwort</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl onChange={onPasswordInput} type="password"/>
              </InputGroup>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="outline-success" onClick={() => handleLogin()}>
                Login
          </Button>
              <Button variant="danger" onClick={() => handleClose()}>
                Close
          </Button>
            </Modal.Footer>
          </Modal >
        </Container>

        <div>
          <p>
            Hallo Welt
  
        </p>
        </div>
      </>
    );
}

export default App;
