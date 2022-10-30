import Form from 'react-bootstrap/Form'
import {Card,Button}from 'react-bootstrap'
import {Link} from  'react-router-dom';

import './login.css';


function logincard() {
  return (

   <Card className="cardform" style={{height : "520px", width: "608px"}} >

        <Form className="m-2">

                    
                <Form.Group className="mt-3 p-3 " controlId="correologin1" >
                    <h5 className=" d-flex justify-content-center mb-4">Iniciar Secion</h5>
                    <Form.Label className="form-label ms-3  text-3" >Correo Electronido:</Form.Label>
                        <Form.Label className="d-flex form-label ms-3 me-3  ">Debe ser de mínino de 8 caracteres</Form.Label>
                        <Form.Control className="ms-3" type="email" placeholder="ejemplo@unsl.com" />
                    <br />

                </Form.Group>    

                <Form.Group className="mb-3 p-3" controlId="contraseñalogin1" >

                    <Form.Label className="form-label ms-3  text-3">Contraseña:</Form.Label>
                    <Form.Label className=" d-flex form-label ms-3 me-3 ">Debe ser de mínino de 8 caracteres</Form.Label>
                    <Form.Control className="ms-3" type="password" placeholder="" />
                    <br />
                
                    <Link  to="/SingUpPage" className="ms-2 p-1" >¿No tienes una cuenta? Registrarse</Link>
                    
                    <br />
                    
                </Form.Group>

            
                <Button className="ms-3 mt-2 bg-secondary  btn card-btn">Enviar</Button>
                <Link  to="/SingUpPage" className="d-flex ms-2 ms-2" >¿No tienes una cuenta? Registrarse</Link>
                

        </Form>

      </Card>


    
  );
}

export default logincard;