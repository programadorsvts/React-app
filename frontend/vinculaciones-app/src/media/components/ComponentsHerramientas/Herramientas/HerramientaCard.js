

import {Card,Button } from 'react-bootstrap'
import './herramientacard.css';



function HerramientaCard(props) {
   
  return (                    
      <Card className="herramienta-card">
            
            <Card.Img variant="top" src={props.data.img} />
            <Card.Body> 
                  <Card.Title className=' text-center'>{props.data.titulo}</Card.Title>
                  <Card.Text className='text-1'>
                        {props.data.texto}
                  </Card.Text>
            </Card.Body>
            <Button variant="btn">Utilizar</Button>
      </Card>    
  );
}

export default HerramientaCard;


