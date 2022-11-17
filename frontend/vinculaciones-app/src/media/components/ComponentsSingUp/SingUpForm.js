
import {Button,Form} from 'react-bootstrap'
import {Link} from  'react-router-dom';
import * as Yup from 'yup';
import { Formik} from 'formik';

import '../../styles/form.css';


const   SingUpForm =() => {


   const schema = Yup.object().shape({

           email:Yup.string().email('email no valido').required('el mail es requerido').trim('los espacio en blanco no estan permitidos '),
           
           password: Yup.string()
            .required('se requiere una contraseña.') 
            .min(8, 'contraseña no valida - minimo 8 caracteres.')
            .trim('los espacio en blanco no estan permitidos '),

           confir:Yup.string().oneOf([Yup.ref('password'), null], 'las contrasenas no son iguales')
            .required('se requiere una contraseña.') 
            .min(8, 'contraseña no valida - minimo 8 caracteres.')
            .trim('los espacio en blanco no estan permitidos '),
    
          });


  return (
    <Formik    
        validationSchema={schema}
            initialValues={{
                email:'',
                password:'',
                confir:'',
                      
            } }
            onSubmit={values => {alert(JSON.stringify(values, null, 2));}}
            >    
          
            {({handleChange, handleSubmit,  values ,touched , errors}) => (
              <Form className="form" >
                <h1 className="encabezado-3 title">Registrarse</h1>
                <Form.Group className="mb-3" controlId="CorreoSingUp" >
                  <Form.Label className="encabezado-4 label" >Correo Electrónico:</Form.Label>
                  <p className="text-5 label-secundary">debe ser de formato @gmail/hotmail</p>
                  <Form.Control  
                      type="email"
                      name='email'
                      placeholder="ejemplo@gmail o @hotmail" 
                      onChange={handleChange}  
                      value={values.email} 
                      isValid={touched.email && !errors.email}
                      isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type='invalid'>
                        {errors.email }
                    </Form.Control.Feedback>
                </Form.Group>    
                <Form.Group className="mb-3" controlId="ContraseñaSingUp" >
                  <Form.Label className="encabezado-4 label">Contraseña:</Form.Label>
                  <p className="text-5 label-secundary">debe ser de mínino de 8 caracteres</p> 
                  <Form.Control 
                        type="password" 
                        name='password' 
                        placeholder=""
                        onChange={handleChange} 
                        value={values.password}        
                        isValid={touched.password && !errors.password}
                        isInvalid={!!errors.password}
                    />
                    <Form.Control.Feedback type='invalid'>
                        {errors.password }
                    </Form.Control.Feedback>
                </Form.Group>
                  <Form.Group className="mb-3" controlId="contraseñaconfig2" >
                  <Form.Label className="encabezado-4 label">Confirmar contraseña:</Form.Label>
                  <Form.Control  className='mb-4'
                        type="password" 
                        name='confir' 
                        placeholder=""
                        onChange={handleChange} 
                        value={values.confir}
                        isValid={touched.confir && !errors.confir}
                        isInvalid={!!errors.confir}
                    />
                    <Form.Control.Feedback type='invalid'>
                        {errors.confir }
                    </Form.Control.Feedback>
                  <Link to="/LoginPage" className="text-4 link">¿Ya tienes una cuenta? Iniciar Sesión</Link>
                </Form.Group>
                <Button className="btn btn-form" type='submit' onClick={handleSubmit} value='Enviar'>Registrarse</Button>
              </Form>
               )}
      </Formik>     
  );
}

export default SingUpForm;