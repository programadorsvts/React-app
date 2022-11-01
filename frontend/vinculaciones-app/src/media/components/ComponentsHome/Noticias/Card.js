
import {Card}from 'react-bootstrap';



function card() {
  return (
    
      <Card style={{height : "346px", width: "262px"}} >

        <Card.Img  className='img-noticias'variant="top" src="https://tusradios.com.ar/uploads/noticias/5/2022/08/4ab6888d348d31303acd30fda37aeb90b6bf34b8.jpg"/>

        
          <Card.Body  className="text-secondary ">

            <Card.Title className="  ps-3 text-lowercase"><h6>4 de Junio de 2022</h6></Card.Title>

            <Card.Text className="mt-4 ps-3  text-uppercase">4 de Junio 2021: Día de la Vinculación Tecnológica</Card.Text>
            
          </Card.Body>

      </Card>
  );
}

export default card;