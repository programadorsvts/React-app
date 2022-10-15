import {Button,Form} from 'react-bootstrap';



function formulario() {
  return (
    <Form>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        
            <Form.Label>Nombre y apellido</Form.Label>
            <Form.Control type="text" placeholder="Nombre....." />
            <br />

            <Form.Label>Email </Form.Label>
            <Form.Control type="email" placeholder="ejemplo@unsl.com" />
            <br />
        
            <Form.Label>Telefono</Form.Label>
            <Form.Control type="text" placeholder="+54 ....." />
            <br />
        
      
        </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Descripcion</Form.Label>
            <Form.Control as="textarea" rows={9} />
            
            
        </Form.Group>
        <Button>boton</Button>

    </Form>
  
  );
}

export default formulario;