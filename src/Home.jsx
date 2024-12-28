import { useState } from 'react';
import { Card, Button, Navbar, Nav, Offcanvas, Container, Row, Col, Modal } from 'react-bootstrap';
import './Home.css';  // Custom CSS file
import { Link } from 'react-router-dom';

const Home = () => {
  const [show, setShow] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  const toggleOffcanvas = () => setShow(!show);

  const handleAboutModalShow = () => setShowAboutModal(true);
  const handleAboutModalClose = () => setShowAboutModal(false);

  const handleContactModalShow = () => setShowContactModal(true);
  const handleContactModalClose = () => setShowContactModal(false);

  return (
    <div className="home" >
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" className="home-navbar">
        <Container fluid>
          <Navbar.Brand href="#" className="me-auto">
            V CALC
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={toggleOffcanvas} />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            show={show}
            onHide={toggleOffcanvas}
            className="home-navbar-offcanvas"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">V CALC</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="home-offcanvas-body">
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#" onClick={handleContactModalShow}>Contact</Nav.Link>
                <Nav.Link href="#" onClick={handleAboutModalShow}>About</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      {/* Body */}
      <Container className="home-mt-5">
        <h1 className="text-center home-mb-4" >V CALC</h1>

        {/* Card with 5 Calculators */}
        <Row className="home-g-4">
          <Col sm={12} md={4}>
            <Card className="home-card">
              <Card.Body className="home-card-body">
                <Card.Title className="home-card-title">Basic Calculator</Card.Title>
                <Link to="/basic"> <Button variant="primary" className="home-button">Go</Button> </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={4}>
            <Card className="home-card">
              <Card.Body className="home-card-body">
                <Card.Title className="home-card-title">Age Calculator</Card.Title>
                <Link to="/age"> <Button variant="primary" className="home-button">Go</Button> </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={4}>
            <Card className="home-card">
              <Card.Body className="home-card-body">
                <Card.Title className="home-card-title">EMI Calculator</Card.Title>
                <Link to="/emi"> <Button variant="primary" className="home-button">Go</Button> </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={4}>
            <Card className="home-card">
              <Card.Body className="home-card-body">
                <Card.Title className="home-card-title">BMI Calculator</Card.Title>
                <Link to="/bmi"> <Button variant="primary" className="home-button">Go</Button> </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={4}>
            <Card className="home-card">
              <Card.Body className="home-card-body">
                <Card.Title className="home-card-title">GST Calculator</Card.Title>
                <Link to="/gst"> <Button variant="primary" className="home-button">Go</Button> </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <footer className="home-footer">
        <p>Created by Varun Kumar G | Linkedin id : Varun Kumar Govindaraj </p>
      </footer>

      {/* About Modal */}
      <Modal show={showAboutModal} onHide={handleAboutModalClose}>
        <Modal.Header closeButton>
          <Modal.Title className="home-modal-title">About </Modal.Title>
        </Modal.Header>
        <Modal.Body className="home-modal-body">
          <p>
            <b> V CALC </b> is an web application that provides 5 types of calculators:
            <ul>
              <b>
              <li>Basic Calculator</li>
              <li>Age Calculator</li>
              <li>EMI Calculator</li>
              <li>BMI Calculator</li>
              <li>GST Calculator</li>
              </b>
            </ul>
            This web application is created by <b> Varun Kumar G</b>.
          </p>
        </Modal.Body>
        <Modal.Footer className="home-modal-footer">
          <Button variant="primary" onClick={handleAboutModalClose}>Close</Button>
        </Modal.Footer>
      </Modal>

      {/* Contact Modal */}
      <Modal show={showContactModal} onHide={handleContactModalClose}>
        <Modal.Header closeButton>
          <Modal.Title className="home-modal-title">Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body className="home-modal-body">
          <p>Mail address: <strong>varunkumar.govindaraj@gmail.com</strong></p>
        </Modal.Body>
        <Modal.Footer className="home-modal-footer">
          <Button variant="primary" onClick={handleContactModalClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Home;
