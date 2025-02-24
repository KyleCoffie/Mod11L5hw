import React from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import './Home.css';
import welcomeImage from '../assets/welcome-image.jpg';

const Home = () => {
  console.log('Rendering Home Component');
  return (
    <div className="home-container">
      <Image src={welcomeImage} fluid className="welcome-image" alt="Welcome" />       <p>Welcome to the Marvel!</p>
      <Button variant="danger" as="a" href="https://www.disneystore.com/marvel-content/?CMP=SYN-MARVELCOM:NAV_MORE">Shop Now</Button>
      <Card className="mt-4" style={{ width: '16rem' }}>
        <Card.Img variant="top" src="https://cdn-ssl.s7.shopdisney.com/is/image/DisneyShopping/1516041280074-1?fmt=webp&qlt=70&wid=608&hei=608" alt="Featured Product" />
        <Card.Body>
          <Card.Title>Featured Product</Card.Title>
          <Card.Text>
This plushy features Sam's star-spangled costume and foam wings to make cuddle time, naptime or storytime positively legendary.          </Card.Text>
          <Button variant="danger" as="a" href="https://www.disneystore.com/captain-america-sam-wilson-cuddleez-plush-the-falcon-and-the-winter-soldier-large-22-415162342637.html">Learn More</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Home;
