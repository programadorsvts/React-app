import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {Link} from  'react-router-dom';

import '../../styles/form.css';

function loginForm() {
  return (
    <Form className="form">
        <h1 className='encabezado-3 title'>Iniciar Sesión</h1>
        <Form.Group className="mb-3" controlId="correologin1" >
            <Form.Label className="encabezado-4 label">Correo Electrónico:</Form.Label>
            <p className="text-5 label-secundary">Debe ser de formato unsl.edu.ar o email.unsl.edu.ar</p>
            <Form.Control type="email" placeholder="ejemplo@unsl.edu.ar" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="contraseñalogin1" >
            <Form.Label className="encabezado-4 label">Contraseña:</Form.Label>
            <p className="text-5 label-secundary">Debe ser de mínimo de 8 caracteres</p>
            <Form.Control type="password" />
            <Link to="/SingUpPage" className="text-4 link" >¿No tienes una cuenta? Registrarse</Link>
        </Form.Group>
        <Button className="btn btn-form">Ingresar</Button>
        <Link to="/SingUpPage" className="text-4 link" >Olvidé mi contraseña</Link>
    </Form>
  );
}

export default loginForm;