import {Card}from 'react-bootstrap';

function redescard(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <a href='#0'>
      <Card.Body className='d-flex align-items-center justify-content-center'>
        <Card.Img className='icon-redes' src={props.info.ruta}  />
      </Card.Body>
    </a>
    </Card>
  );
}

export default redescard;