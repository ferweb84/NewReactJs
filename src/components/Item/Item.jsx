import React from 'react';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

const Item = ({prod}) => {
    const  { nombre, tipo, cantidad, precio, talle, img }=prod
  return (

    <Card  style={{ width: '18rem' }}>
      <Card.Img variant="top"  src={img} />
      <Card.Body>
        <Card.Title>{nombre} </Card.Title>
        <Card.Text>
          precio:{precio}
          
        </Card.Text>
        <Button variant="primary">Ver Detalle</Button>
      </Card.Body>
    </Card>
  );
}

export default Item