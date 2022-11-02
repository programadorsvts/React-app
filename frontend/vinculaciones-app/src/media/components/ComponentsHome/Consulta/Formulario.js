import {Button,Form} from 'react-bootstrap';
import '../../../styles/form.css';



function formulario() {
  return (
    <Form className="  ">

        <Form.Group className="" controlId="exampleForm.ControlInput1">
        
            <Form.Label className="ms-2">Nombre y apellido</Form.Label>
                <Form.Control type="text" placeholder=""  />
            <br />

            <Form.Label className="">Email </Form.Label>
            <Form.Control type="email" placeholder="ejemplo@unsl.com" />
            <br />
        
            <Form.Label className="">Telefono</Form.Label>
            <Form.Control type="text" placeholder="+54 ....." />
            <br />
        </Form.Group>

        <Form.Group className="" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="ms-4">Descripcion</Form.Label>
            <Form.Control as="textarea" rows={9} />  
        </Form.Group>
        <Button className=''>Enviar</Button>

    </Form>
  
  );
}

export default formulario;