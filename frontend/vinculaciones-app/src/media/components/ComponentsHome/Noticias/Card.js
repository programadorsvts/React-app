
import {Card}from 'react-bootstrap';
import  './noticiacard.css' 


function card(props) {
  return (
    
      <Card  classname='card-noticias' >

        <Card.Img  className='img-noticias'  src={props.info.imagen}/>

          <Card.Body  className="">

            <Card.Title className="fecha-noticias"><h6>{props.info.fecha}</h6></Card.Title>

            <Card.Text className="mt-4 text-center text-1 ">{props.info.texto}</Card.Text>
            
          </Card.Body>
          
      </Card>
  );
}

export default card;