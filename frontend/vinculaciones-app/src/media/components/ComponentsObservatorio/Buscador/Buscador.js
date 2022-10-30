import './buscador.css';
import {Button,Form,Container} from 'react-bootstrap'



function buscador (){
    return(
            <>
            
                    <Container className="d-flex  justify-content-center mt-5   ">
     
                        <Form className="form buscador-body  buscador-label2">
                            
                            <Form.Group className="mb-3" controlId="buscador1" >
                                <Form.Label className="encabezado-4 label" >Buscardor</Form.Label>
                                <Form.Control type="text" placeholder="ingrese titulo" />
                            </Form.Group>    
                            <Form.Group className="mb-3" controlId="selector1" >
                                <Form.Label className="encabezado-4 label">Seleccione tematica</Form.Label>
                                <Form.Select >
                                    <option>Opcion 1 </option>
                                    <option>Opcion 2 </option>
                                    <option>Opcion 3 </option>
                                    <option>Opcion 4 </option>
                                
                                </Form.Select>
                            </Form.Group>
                            </Form>
                    </Container>
                
            
            
            </>
    );
}


 export default buscador