import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import '../../../styles/form.css';
import './buscador.css';

function buscador (){
    return(
    <>
        <Container className="d-flex justify-content-center mt-5">
            <Form className="form buscador-form mb-5 w-75">
                <Form.Group className="mb-3" controlId="buscador1">
                    <Form.Label className="encabezado-4 label" >Buscador</Form.Label>
                    <Form.Control type="text" placeholder="ingrese titulo" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="selector1" >
                    <Form.Label className="encabezado-4 label">Seleccione tematica</Form.Label>
                    <Form.Select>
                        <option>Mostrar todo</option>
                        <option>Salud</option>
                        <option>Alimentos</option>
                        <option>Agricultura</option>
                        <option>Ambiente</option>
                    </Form.Select>
                </Form.Group>
                </Form>
        </Container>
    </>
    );
}

export default buscador