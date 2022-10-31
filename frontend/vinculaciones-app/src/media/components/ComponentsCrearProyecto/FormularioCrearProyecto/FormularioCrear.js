import {Button,Form,Container} from 'react-bootstrap'
import {Link} from  'react-router-dom';

import '../../../styles/form.css';


function formulariocrear() {
  return (

    <Container className='mt-5'>
        <Form className="form">
        <h1 className="encabezado-3 title">Crear Nuevo Proyecto</h1>
        <Form.Group className="mb-3" controlId="titulo1" >
            <Form.Label className="encabezado-4 label" ></Form.Label>
            <p className="text-5 label-secundary">Maximo 60 caracteres</p>
            <Form.Control type="email" placeholder="ejemplo@unsl.com" />
        </Form.Group>    
        <Form.Group className="mb-3" controlId="contraseñaregistro1" >
            <Form.Label className="encabezado-4 label">Contraseña:</Form.Label>
            <p className="text-5 label-secundary">Debe ser de mínino de 8 caracteres</p>
            <Form.Control type="password" placeholder="" />
        </Form.Group>
            <Form.Group className="mb-3" controlId="contraseñaregistro2" >
            <Form.Label className="encabezado-4 label">Confirmar contraseña:</Form.Label>
            <Form.Control type="password" placeholder="" />
            <Link  to="/LoginPage" className="text-4 link" >¿Ya tienes una cuenta? Iniciar Sesión</Link>
        </Form.Group>
        <Button className="btn btn-form">Registrarse</Button>
        </Form>
    </Container>    
  );
}

export default formulariocrear;