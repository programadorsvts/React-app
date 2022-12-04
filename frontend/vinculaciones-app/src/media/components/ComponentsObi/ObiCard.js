

import {Card,Button } from 'react-bootstrap'
import './obi.css';



function obicard(props) {
  return (

    <Card className='obi-card'>
      <Card.Header className='encabezado-3 d-flex justify-content-center text-upcase ' >{props.data.titulo}</Card.Header>
      <Card.Body>
        
        <Card.Text>
            {props.data.texto}
        </Card.Text>
        <Button className='d-flex justify-content-center obi-button ' href={props.data.href}>ir a</Button>
      </Card.Body>
    </Card>

  );
}

export default obicard;


