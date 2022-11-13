import {Card, Col, Row}from 'react-bootstrap';
import Formulario from './Formulario';





function formulariocard() {
  return (
    
    <Card style={{height : "730px", width: "544px"}} className="form">
        <Card.Body >
            <Row >
                    <Col >
                        <Formulario ></Formulario>
                    </Col>
            </Row>
        </Card.Body>
    </Card>
  );
}

export default formulariocard;