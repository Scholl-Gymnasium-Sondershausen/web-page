import React, {Component} from 'react';
import './App.css';
import {
    Button,
    Col,
    Container,
    Form,
    FormControl,
    InputGroup,
    Modal,
    Nav,
    Navbar,
    NavDropdown,
    Row
} from 'react-bootstrap';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import MasterDetail from "./MasterDetail";
import DetailView from "./DetailView";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMasterdetail: true,
            showMasterDetail: true,
            agList: [
                {
                    title: "ag 1"
                },
                {
                    title: "ag 2"
                }
            ]
        }
    }

    list() {
        let list = [
            {name: "guido", age: "75"},
            {name: "ingo"}
        ]

        for (let i = 0; i < list.length; i++) {
            let item = list[i]
            let name = item.name
            console.log(name)
            if (item.age !== undefined) {
                let age = item.age
                console.log(age)
            }
        }
    }

    ChangeContent() {
        let {showMasterdetail} = this.state
        this.setState({showMasterdetail: (showMasterdetail) ? false : true})
    }
    ChangeContent1() {
        let {showDetailView} = this.state
        this.setState({showDetailView: (showDetailView) ? false : true})
    }

    render() {
        return (
            <>
                <Router>
                <Navbar bg="dark" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">Speen</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Link className="nav-link" to="/first">1</Link>
                                <Link className="nav-link" to="/second">2</Link>
                                <Link className="nav-link" to="/third">3</Link>
                                <Link className="nav-link" to="/fourth">4</Link>
                                <Nav.Link href="#start">Startseite</Nav.Link>
                                <NavDropdown title="Geschichte" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#erstes-zeitalter">Erstes Zeitalter</NavDropdown.Item>
                                    <NavDropdown.Item href="#zweites-zeitalter">Zweites Zeitalter</NavDropdown.Item>
                                    <NavDropdown.Item href="#drittes-zeitalter">Drittes Zeitalter</NavDropdown.Item>
                                    <NavDropdown.Item href="#viertes-zeitalter">Meat</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Orte und Länder" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#orte-und-laender-erstes-zeitalter">Erstes
                                        Zeitalter</NavDropdown.Item>
                                    <NavDropdown.Item href="#orte-und-laender-zweites-zeitalter">Zweites
                                        Zeitalter</NavDropdown.Item>
                                    <NavDropdown.Item href="#orte-und-laender-drittes-zeitalter">Drittes
                                        Zeitalter</NavDropdown.Item>
                                    <NavDropdown.Item href="#orte-und-laender-viertes-zeitalter">Viertes
                                        Zeitalter</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Form inline>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                                <Button variant="outline-success">Search</Button>
                                <Button variant="outline-success">Login</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                    <Switch>
                        <Route path="/first">
                            <>
                                <Button onClick={this.ChangeContent.bind(this)}>change content</Button>
                                {!this.state.showMasterdetail &&
                                <MasterDetail/>
                                }
                                {this.state.showMasterdetail &&
                                <Container className="app">
                                    <ul id="meso">
                                        <li className="testclass">
                                            If you or a loved one
                                        </li>
                                        <li>
                                            has been diagnosed with mesothelioma
                                        </li>
                                        <li>
                                            you may be entitled to financial compensation
                                        </li>
                                        <li className="testclass">
                                            ya like Jazz?
                                        </li>
                                        <li>
                                            dlkfjsdlkfjd
                                        </li>
                                    </ul>

                                    <Row>
                                        <Col>
                                            {this.state.agList.map((item, index) => {
                                                return (
                                                    <dif>{item.title}</dif>
                                                )
                                            })
                                            }
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="col1">
                                            <Row>
                                                <h1>Ein großer Baum...</h1>
                                                <img
                                                    src="https://tse3.mm.bing.net/th?id=OIP.vZINCIW4jCLh4U1yfnv8YQHaHa&pid=Api&P=0&w=300&h=300"/>
                                            </Row>
                                        </Col>
                                        <Col className="col2">
                                            <ul className="liste">
                                                <li>Ein Baum im Frühling:</li>
                                                <li><img
                                                    src="https://tse4.mm.bing.net/th?id=OIP.Yrwc89v2Hkfmlij3Gmqd0QHaFj&pid=Api&P=0&w=215&h=162"/>
                                                </li>
                                                <li>Ein Baum im Sommer:</li>
                                                <li><img
                                                    src="https://tse3.mm.bing.net/th?id=OIP.vZINCIW4jCLh4U1yfnv8YQHaHa&pid=Api&P=0&w=300&h=300"/>
                                                </li>
                                                <li>Ein Baum im Herbst:</li>
                                                <li><img
                                                    src="https://tse1.mm.bing.net/th?id=OIP.il_dOWFcSDa7iY3oQvPw2AHaJF&pid=Api&P=0&w=300&h=300"/>
                                                </li>
                                                <li>Ein Baum im Winter</li>
                                                <li><img
                                                    src="https://tse2.mm.bing.net/th?id=OIP.DdwyUETdN7vskRxwYiR48wHaEz&pid=Api&P=0&w=280&h=182"/>
                                                </li>
                                            </ul>
                                            <p>
                                                Ich hab leider keine Ahnung von Bäumen, deswegen zeige ich euch Offensichtliches.<br/>
                                                Leider sehen die ersten beiden Bilder vollkommen gleich aus...
                                            </p>
                                        </Col>
                                    </Row>

                                    <div style={{height: '1000px'}}/>


                                    <Modal>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Bitte melde dich an!</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <InputGroup>
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text>Name</InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <FormControl/>
                                            </InputGroup>
                                            <InputGroup>
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text>Passwort</InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <FormControl type="password"/>
                                            </InputGroup>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="outline-success">
                                                Login
                                            </Button>
                                            <Button variant="danger">
                                                Close
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>
                                </Container>
                                }
                            </>
                        </Route>
                        <Route path="/second">
                            <img className="App" src="https://www.ecospaints.net/image/catalog/product/white-color-swatch.png"/>
                        </Route>
                        <Route path="/third">
                            <>
                                <Button onClick={this.ChangeContent1.bind(this)}>DetailView</Button>
                                {this.state.showDetailView &&
                                <DetailView changeContent={this.ChangeContent.bind(this)} zhl={"sddffe"}/>
                                }
                                {!this.state.showMasterdetail &&
                                <MasterDetail/>
                                }
                            </>
                        </Route>
                        <Route path="/fourth">
                            <>
                              4
                            </>
                        </Route>
                    </Switch>

                </Router>
            </>
        );
    }
}

export default App;
