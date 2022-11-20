  import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './herramientas.css';


function herramientascard(props) {
  return (

        <Card className='herramientas-card '>
          <Card.Img className='' variant="top" src={props.data.imagen} />
          <Card.Body >
            <Card.Title>{props.data.titulo}</Card.Title>
            <Card.Text>{props.data.informacion}</Card.Text>
            <Button  className='' variant="primary">Utilizar</Button>
          </Card.Body>
        </Card>

      );
    }

export default herramientascard;