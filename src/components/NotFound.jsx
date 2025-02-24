// src/components/NotFound.jsx
import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './NotFound.css';
import errorImage from '../assets/oops.jpg'; 

const NotFound = () => {
  console.log('Rendering NotFound Component');
  return (
    <Container className="not-found-container">
      <Row className="align-items-center">
        <Col md={6} className="text-center">
          <h2>404 - Not Found</h2>
          <p>Oops! The page you are looking for does not exist.</p>
          <Button as={NavLink} to="/" variant="primary">
            Go Back Home
          </Button>
        </Col>
        <Col md={6} className="text-center">
          <Image src={errorImage} fluid className="error-image" alt="Error" />
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
