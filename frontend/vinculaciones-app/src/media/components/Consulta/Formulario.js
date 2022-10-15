import {Button,Form} from 'react-bootstrap';



function formulario() {
  return (
    <Form className="m-2">

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        
            <Form.Label className="ms-2">Nombre y apellido</Form.Label>
                <Form.Control type="text" placeholder=""  />
            <br />

            <Form.Label className="ms-2">Email </Form.Label>
            <Form.Control type="email" placeholder="ejemplo@unsl.com" />
            <br />
        
            <Form.Label className="ms-2">Telefono</Form.Label>
            <Form.Control type="text" placeholder="+54 ....." />
            <br />
        
      
        </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="ms-4">Descripcion</Form.Label>
            <Form.Control as="textarea" rows={9} />
            
            
        </Form.Group>
        <Button className="ms-3 mt-2" >Enviar</Button>

    </Form>
  
  );
}

export default formulario;