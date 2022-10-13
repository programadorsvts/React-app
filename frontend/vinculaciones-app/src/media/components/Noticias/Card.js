
import {Card}from 'react-bootstrap';




function card() {
  return (
    
    <Card style={{ width: '14rem' }}>
      <Card.Img variant="top" src="../../image/images/oficina.jpg" />
      <Card.Body  className="text-secondary">
        <Card.Title><h6>4 de Junio de 2022</h6></Card.Title>
        <Card.Text className="mt-3">
            4 de Junio 2021: Día de la Vinculación Tecnológica
        </Card.Text>
        
      </Card.Body>
    </Card>
  );
}

export default card;