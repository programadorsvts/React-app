
import {Card}from 'react-bootstrap';



function card(props) {
  return (
    
      <Card  style={{height : "346px", width: "262px"}} >

        <Card.Img  className='img-noticias' variant="top" src={props.info.imagen}/>

          <Card.Body  className="text-secondary ">

            <Card.Title className="  ps-3 text-lowercase"><h6>{props.info.titulo}</h6></Card.Title>

            <Card.Text className="mt-4 ps-3  text-uppercase">{props.info.texto}</Card.Text>
            
          </Card.Body>

      </Card>
  );
}

export default card;