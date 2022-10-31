
import {Card}from 'react-bootstrap'
import './card.css';


function proyectocard() {
  return (
        <Card className='card text-center'>
          <Card.Body>
            <Card.Title>Area tematica</Card.Title>
            <Card.Text className='mt-5'>
              Hortalizas deshidratadas utilizando energia no convencional
            </Card.Text>
          </Card.Body>
        </Card>
  );
}

export default proyectocard;