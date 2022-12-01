import Card from 'react-bootstrap/Card'
import './gestion.css'  

function gestioncard(props) {
  return (

    <Card style={{ width: '18rem' }}>
      <a href={props.info.ruta} target="_blank">
      <Card.Body className='d-flex align-items-center justify-content-center'>
        <Card.Img className='icon-gestion' src={props.info.imagen} />
        <Card.Text className='gestion-card'>
          {props.info.titulo}
        </Card.Text>
      </Card.Body>
    </a>
    </Card>

  );
}

export default gestioncard;