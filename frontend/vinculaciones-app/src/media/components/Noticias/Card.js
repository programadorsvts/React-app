
import {Card}from 'react-bootstrap';




function card() {
  return (
    
    <Card style={{height : "346px", width: "262px"}} >

      <Card.Img variant="top" src="./oficina.jpg"  style={{height : "160px", width: "262px"}}/ >

      
      <Card.Body  className="text-secondary ">

        <Card.Title className="  ps-3 text-lowercase"><h6>4 de Junio de 2022</h6></Card.Title>

        <Card.Text className="mt-4 ps-3  text-uppercase">4 de Junio 2021: Día de la Vinculación Tecnológica</Card.Text>
        
      </Card.Body>

    </Card>
  );
}

export default card;