

import {Card,Button } from 'react-bootstrap'
import './obi.css';



function obicard(props) {
  return (
    <Card className=''>
      <Card.Header className='encabezado-3 d-flex justify-content-center text-upcase '>{props.data.titulo}</Card.Header>
      <Card.Body>
        <Card.Text>
            {props.data.texto}
        </Card.Text>
      </Card.Body>
      <Button className='d-flex justify-content-center mt-1 obi-button ' href={props.data.href} target='_blank'>ir a</Button>
    </Card>

  );
}

export default obicard;


