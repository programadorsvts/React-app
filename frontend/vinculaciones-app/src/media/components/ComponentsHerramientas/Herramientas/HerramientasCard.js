import {Card,Button}from 'react-bootstrap';
import './herramientas.css';


function herramientascard(props) {
  return (
    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.data.img} />
      <Card.Body>
        <Card.Title>{props.data.titulo}</Card.Title>
        <Card.Text>{props.data.info}</Card.Text>
        <Button variant="primary">Utilizar</Button>
      </Card.Body>
    </Card>
  );
}

export default herramientascard;