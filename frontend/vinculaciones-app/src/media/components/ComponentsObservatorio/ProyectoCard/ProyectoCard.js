
import {Card} from 'react-bootstrap'
import './card.css';


function proyectocard(props) {
  return (
        <Card className='card'>
          <Card.Body>
            <Card.Text className='encabezado-4'>
              {props.titulo}
            </Card.Text>
            <Card.Title className='text-1 text-deg text-capitalize'>{props.area}</Card.Title>
          </Card.Body>
        </Card>
  );
}
export default proyectocard;