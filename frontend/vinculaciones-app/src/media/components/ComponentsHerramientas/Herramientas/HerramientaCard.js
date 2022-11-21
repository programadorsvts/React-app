

import {Card } from 'react-bootstrap'
import './herramientacard.css';



function RevistaCard(props) {
   
  return (                    
      <Card className="card-noticias" style={{ width: '16rem' }}>
            <a href={props.data.href}>
            <Card.Img variant="top" src={props.data.img} />
            <Card.Body> 
            <Card.Title className='text-date'>{props.data.titulo}</Card.Title>
            <Card.Text className='text-1'>
                  {props.data.texto}
            </Card.Text>
            </Card.Body>
            </a>
      </Card>    
  );
}

export default RevistaCard;


