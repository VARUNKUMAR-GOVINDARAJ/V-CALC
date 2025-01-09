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
    <div className="home">
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" className="home-navbar">
        <Container fluid>
          <Navbar.Brand href="#" className="me-auto">V CALC</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={toggleOffcanvas} />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            show={show}
            onHide={toggleOffcanvas}
            className="home-navbar-offcanvas"
          >
            <Offcanvas.Header closeButton style={{ backgroundColor: 'white', color: 'black' }}>
              <Offcanvas.Title id="offcanvasNavbarLabel">V CALC</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="home-offcanvas-body">
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#" onClick={handleContactModalShow} style={{color:'white'}}>Contact</Nav.Link>
                <Nav.Link href="#" onClick={handleAboutModalShow} style={{color:'white'}}>About</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      {/* Body Content */}
      <Container className="home-mt-5">
        <h1 className="home-mb-4">V CALC</h1>

        {/* Card Section */}
        <Row className="home-g-4">
          {['Basic', 'Age', 'EMI', 'BMI', 'GST'].map((calc, index) => (
            <Col sm={12} md={4} key={index}>
              <Card className="home-card">
                <Card.Body className="home-card-body">
                  <Card.Title className="home-card-title">{calc} Calculator</Card.Title>
                  <Link to={`/${calc.toLowerCase()}`}>
                    <Button variant="primary" className="home-button">Go</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Footer */}
      <footer className="home-footer">
        <p> Created by Varun Kumar G | LinkedIn: Varun Kumar G </p>
      </footer>

      {/* About Modal */}
      <Modal show={showAboutModal} onHide={handleAboutModalClose}>
        <Modal.Header closeButton>
          <Modal.Title className="home-modal-title">About</Modal.Title>
        </Modal.Header>
        <Modal.Body className="home-modal-body">
          <p><b>V CALC</b> is a web application with 5 types of calculators:
            <ul>
              <b>
                <li>Basic Calculator</li>
                <li>Age Calculator</li>
                <li>EMI Calculator</li>
                <li>BMI Calculator</li>
                <li>GST Calculator</li>
              </b>
            </ul>
            Created by <b>Varun Kumar G</b>.
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
          <p>Mail address: <b><a href="mailto:varunkumar.govindaraj@gmail.com" className="h-m-a">varunkumar.govindaraj@gmail.com</a></b></p>
        </Modal.Body>
        <Modal.Footer className="home-modal-footer">
          <Button variant="primary" onClick={handleContactModalClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Home;
