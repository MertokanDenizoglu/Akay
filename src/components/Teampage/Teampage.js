import React from 'react';
import './Teampage.css';
import {Card , Button } from 'react-bootstrap'

const Teampage = () => {
  return (
    <div className='teampage'>
        <Card className='cardt' style={{ width: '18rem' }}>
  <Card.Img variant="top" src="Hukuk2.png" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

<Card className='cardt' style={{ width: '18rem' }}>
  <Card.Img variant="top" src="Hukuk2.png" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
<Card className='cardt' style={{ width: '18rem' }}>
  <Card.Img variant="top" src="Hukuk2.png" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    </div>
  )
}

export default Teampage;