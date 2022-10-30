import Form from 'react-bootstrap/Form'
import {Card,Button}from 'react-bootstrap'
import {Link} from  'react-router-dom';

import './login.css';


function logincard() {
  return (

   <Card className="card" style={{height : "520px", width: "608px"}} >

        <Form className="m-2">

                <Form.Group className="mt-3" controlId="correologin1" >
                
                    <Form.Label className="form-label m-3  text-3" >Correo Electronido:</Form.Label>
                        <Form.Label className="d-flex form-label ms-3 me-3  ">Debe ser de mínino de 8 caracteres</Form.Label>
                        <Form.Control className="m-3" type="email" placeholder="ejemplo@unsl.com" />
                    <br />

                </Form.Group>    

                <Form.Group className="mb-3" controlId="contraseñalogin1" >

                    <Form.Label className="form-label   text-3">Contraseña:</Form.Label>
                    <Form.Label className=" d-flex form-label ms-3 me-3 ">Debe ser de mínino de 8 caracteres</Form.Label>
                    <Form.Control className="m-3" type="password" placeholder="" />
                    <br />
                
                    <Link  to="/SingUpPage" className="ms-2" >¿No tienes una cuenta? Registrarse</Link>
                    
                    <br />
                
            
                </Form.Group>

            
                <Button className="ms-3 mt-2 bg-secondary  btn card-btn">Enviar</Button>

        </Form>

      </Card>


    
  );
}

export default logincard;