import {Card}from 'react-bootstrap';
import './noticiacard.css'
import '../../../styles/index.css'

function card(props) {
  return (

    <Card className="card-noticias" style={{ width: '16rem' }}>
      <a href='#0'>
        <Card.Img variant="top" src={props.info.imagen} />
        <Card.Body> 
          <Card.Title className='text-date'>{props.info.fecha}</Card.Title>
          <Card.Text className='text-1'>
            {props.info.texto}
          </Card.Text>
        </Card.Body>
      </a>
    </Card>

  );
}

export default card;