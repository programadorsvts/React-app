import {Button,Form,Container} from 'react-bootstrap'
import {Link} from  'react-router-dom';

import '../../../styles/form.css';


function formulariocrear() {
  return (

    <Container className='mt-5'>
        <Form className="form ">
        <h1 className="encabezado-2 title">Crear Nuevo Proyecto</h1>
        <Form.Group className="mb-3" controlId="titulo1" >
            <Form.Label className="encabezado-4 label" ></Form.Label>
            <h1 className="encabezado-4 ">Titulo</h1>
            <p className="text-5 label-secundary">(maximo 60 caracteres)</p>
            <Form.Control type="text" placeholder="" />
        </Form.Group>    
        <Form.Group className="mb-3" controlId="director1" >
            <Form.Label className="encabezado-4 label" ></Form.Label>
            <h1 className="encabezado-4 "> Nombre de el/la director/a:</h1>
            <p className="text-5 label-secundary">(maximo 8 caracteres)</p>
            <Form.Control type="text" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="tipo1" >
            <Form.Label className="encabezado-4 label" ></Form.Label>
            <h1 className="encabezado-4 ">Tipo de Organizacion:</h1>
                <Form.Select >
                    <option>Opcion 1</option>
                    <option>Opcion 2</option>
                </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="area1" >
            <Form.Label className="encabezado-4 label" ></Form.Label>
            <h1 className="encabezado-4 ">Area tematica:</h1>
                <Form.Select >
                    <option>Opcion 1</option>
                    <option>Opcion 2</option>
                    <option>Opcion 3</option>
                    <option>Opcion 4</option>
                </Form.Select>
        </Form.Group>
        <Form.Group className="" controlId="contacto1" >
            <Form.Label className="encabezado-4 label"></Form.Label>
            <h1 className="encabezado-4 ">Contacto:</h1>
            <h1 className="encabezado-4 ">Correo Electronico:</h1>
            <Form.Control type="text" placeholder="" />
        </Form.Group>
        <Form.Group className="" controlId="telefono1" >
            <Form.Label className="encabezado-4 label"></Form.Label>
            <h1 className="encabezado-4 ">Telefono:</h1>
            <Form.Control type="text" placeholder="" />
        </Form.Group>
         <Form.Group className="" controlId="direccion1" >
            <Form.Label className="encabezado-4 label"></Form.Label>
            <h1 className="encabezado-4 ">Direccion:</h1>
            <Form.Control type="text" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3 mt-4" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="encabezado-4 label">Descripcion</Form.Label>
            <Form.Control as="textarea" rows={10} />
        </Form.Group>   
        <Button className="btn btn-form mt-5">Crear Proyecto</Button>
        </Form>
    </Container>    
  );
}

export default formulariocrear;