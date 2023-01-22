import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {Link} from  'react-router-dom';
import * as Yup from 'yup';
import { Formik} from 'formik';
import '../../styles/form.css';
import { useNavigate } from 'react-router-dom';

import { useState } from 'react';
import  {useLoginContext}  from '../../../LoginProvider';


function LoginForm() {

    const navigate = useNavigate();
    const [errorSubmit, setErrorSubmit] = useState("");
    const schema = Yup.object().shape({
        email: Yup.string()
          .email('El valor ingresado no es un email')
          .required('el email es obligatorio')
          .trim('El email no permite espacios en blanco'),
        password: Yup.string()
          .required('La contraseña es obligatoria.')
          .min(8, 'La contraseña debe tener mínimo 8 caracteres')
    });
    const login=useLoginContext();
  return(
    <Formik    
      validationSchema={schema}
          initialValues={{
              email:'',
              password:'',
          } }
          onSubmit={values => {
           
        }}
      >
      {({handleChange, handleSubmit, handleBlur, values ,touched , errors}) => (
        <Form onSubmit={handleSubmit} className="form">
          <h1 className='encabezado-3 title'>Iniciar Sesión</h1>
          <Form.Group className="mb-3" controlId="correologin1" >
            <Form.Label className="encabezado-4 label">Correo Electrónico:</Form.Label>
            <p className="text-5 label-secundary">debe ser de formato unsl.edu.ar o email.unsl.edu.ar</p>
            <Form.Control 
              name='email'
              type="text"
              value={values.email}
              onBlur={handleBlur}
              onChange={handleChange}
              isValid={touched.email && !errors.email}
              isInvalid={touched.email && errors.email}
              />
              <Form.Control.Feedback type='invalid'>
                  {errors.email}
              </Form.Control.Feedback>
              
          </Form.Group>
          <Form.Group className="mb-3" controlId="contraseñalogin1" >
              <Form.Label className="encabezado-4 label">Contraseña:</Form.Label>
              <p className="text-5 label-secundary">debe ser de mínimo de 8 caracteres</p>
              <Form.Control className='mb-4'
                  name='password'
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.password && !errors.password}
                  isInvalid={touched.password && errors.password}
                  />
                  <Form.Control.Feedback type='invalid'>
                      {errors.password }
                  </Form.Control.Feedback>
              <Link to="/SingUpPage" className="text-5 link" >¿No tienes una cuenta? Registrarse</Link>
          </Form.Group>
          <Button className="btn btn-form "onClick={handleSubmit}>Ingresar</Button>
          {errorSubmit ? <p className="error-submit"> {errorSubmit}</p> : ""}
          <Link to="/RestablecerPage" className="text-5 link" >Olvidé mi contraseña</Link>
        </Form>
      )}
  </Formik>
  )
}

export default LoginForm;