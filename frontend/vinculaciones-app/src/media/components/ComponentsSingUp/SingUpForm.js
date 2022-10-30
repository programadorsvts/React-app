import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {Link} from  'react-router-dom';

import '../../styles/form.css';

function SingUpForm() {
  return (
    <Form className="form">
      <h1 className="encabezado-3 title">Registrarse</h1>
      <Form.Group className="mb-3" controlId="correoregistro1" >
        <Form.Label className="encabezado-4 label" >Correo Electrónico:</Form.Label>
        <p className="text-5 label-secundary">Debe ser de formato unsl.edu.ar o email.unsl.edu.ar</p>
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
  );
}

export default SingUpForm;