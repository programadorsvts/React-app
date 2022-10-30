import Form from 'react-bootstrap/Form'
import {Card,Button}from 'react-bootstrap'
import {Link} from  'react-router-dom';

import './singup.css'; 


function singupcard() {
  return (

   <Card className="cardform" style={{height : "520px", width: "608px"}} >

        <Form className="m-1">

                <Form.Group className="mt-3 p-3 " controlId="correoregistro1" >
                    <h5 className=" d-flex justify-content-center mb-4">Registrarse</h5>
                    <Form.Label className="form-label ms-3  text-3" >Correo Electronido:</Form.Label>
                        
                        <Form.Control className="ms-3" type="email" placeholder="ejemplo@unsl.com" />
                    

                </Form.Group>    

                <Form.Group className=" px-3" controlId="contraseñaregistro1" >

                    <Form.Label className="form-label ms-3  text-3">Contraseña:</Form.Label>
                    <br />
                    <Form.Label className="  form-label ms-3 me-3 ">Debe ser de mínino de 8 caracteres</Form.Label>
                    <Form.Control className="ms-3" type="password" placeholder="" />
                    <br />
            
                </Form.Group>
                   <Form.Group className="mb-3 p-3" controlId="contraseñaregistro2" >

                    <Form.Label className="form-label ms-3  text-3">Confirmar   contraseña:</Form.Label>
                    
                    <Form.Control className="ms-3" type="password" placeholder="" />
                    
                    <br />
                
                    <Link  to="/SingUpPage" className="ms-2 p-1" >¿Ya tienes una cuenta? Iniciar Sesion</Link>
                    
                </Form.Group>

            
                <Button className=" btn card-btn">Enviar</Button>
              
                

        </Form>

      </Card>


    
  );
}

export default singupcard;