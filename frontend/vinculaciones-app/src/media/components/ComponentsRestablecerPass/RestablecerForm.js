import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {Link} from  'react-router-dom';
import * as Yup from 'yup';
import { Formik} from 'formik';
import axios from 'axios';
import '../../styles/form.css';







function restablecerform() {

     const schema = Yup.object().shape({
         email: Yup.string()
        /*  .test('Unique Email', 'Email already in use', // <- key, message
                function (value) {
                    return new Promise((resolve, reject) => {
                        axios.get(`http://localhost:8003/api/u/user/${value}/available`)
                            .then((res) => {
                                resolve(true)
                            })
                            .catch((error) => {
                                if (error.response.data.content === "The email has already been taken.") {
                                    resolve(false);
                                }
                            })
                    })
                }
            ) */
            .min(8, 'Minimo de catacteres 8')
            .required('se requiere una contraseña.')
            .trim('los espacio en blanco no estan permitidos '),
            
    
           password: Yup.string()
            .required('se requiere una contraseña.') 
            .min(8, 'contraseña no valida - minimo 8 caracteres.')
            .trim('los espacio en blanco no estan permitidos '),

            newpassword:Yup.string().oneOf([Yup.ref('password'), null], 'las contrasenas no son iguales')
            .required('se requiere una contraseña.') 
            .min(8, 'contraseña no valida - minimo 8 caracteres.')
            .trim('los espacio en blanco no estan permitidos '),
          });

  return(
          <Formik    
              validationSchema={schema}
                  initialValues={{
                      email:'',
                      password:'',
                      newpassword:'',
                  } }
                  onSubmit={values => {alert(JSON.stringify(values, null, 2));}}
                  >    
          
                  {({handleChange, handleSubmit,  values ,touched , errors}) => (
                    <Form onSubmit={handleSubmit} className="form">
                        <h1 className='encabezado-3 title'>Restablecer Contraseña</h1>
                        <Form.Group className="mb-3" controlId="correorestablecer1" >
                            <Form.Label className="encabezado-4 label">Correo Electrónico:</Form.Label>
                            <p className="text-5 label-secundary">Debe ser de formato @gmail/hotmail</p>
                            <Form.Control 
                                  name='email' 
                                  type="text" 
                                  placeholder=""  
                                  value={values.email}
                                  onChange={handleChange}
                                  isValid={touched.email && !errors.email}
                                  isInvalid={!!errors.email}
                                  />

                                <Form.Control.Feedback type='invalid'>
                                   {errors.email && <p>el formato email no es correcto</p>}
                                </Form.Control.Feedback>
                            
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="contraseñarestablecer1" >
                            <Form.Label className="encabezado-4 label">Ingrese Nueva Contraseña:</Form.Label>
                            <p className="text-5 label-secundary">Debe ser de mínimo de 8 caracteres</p>
                            <Form.Control 
                                  name='password' 
                                  type="password" 
                                  placeholder=""  
                                  value={values.password}
                                  onChange={handleChange}
                                  isValid={touched.password && !errors.password}
                                  isInvalid={!!errors.password}
                                  />

                                <Form.Control.Feedback type='invalid'>
                                   {errors.password }
                                </Form.Control.Feedback>
                            
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="contraseñarestablecer2" >
                            <Form.Label className="encabezado-4 label">Ingrese la Contraseña:</Form.Label>
                            <p className="text-5 label-secundary">Debe ser de mínimo de 8 caracteres</p>
                            <Form.Control 
                                  name='newpassword' 
                                  type="password" 
                                  placeholder=""  
                                  value={values.password}
                                  onChange={handleChange}
                                  isValid={touched.newpassword && !errors.newpassword}
                                  isInvalid={!!errors.newpassword}
                                  />

                                <Form.Control.Feedback type='invalid'>
                                   {errors.newpassword}
                                </Form.Control.Feedback>
                        </Form.Group>
                        <Button className="btn btn-form"onClick={handleSubmit}>Restablecer</Button>
                      
                    </Form>
                  )}
            </Formik>   
              
           
    )
}

export default restablecerform;