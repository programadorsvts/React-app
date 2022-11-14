
import {Card}from 'react-bootstrap'
import './card.css';


function proyectocard(props) {
  return (
        <Card className='card text-center'>
          <Card.Body>
            <Card.Text className='mt-3 d-flex text-titulo text-1'>
              {props.titulo}
            </Card.Text>
            <Card.Title className='  align-self-end text-area'>{props.area}</Card.Title>
          </Card.Body>
        </Card>
  );
}

export default proyectocard;