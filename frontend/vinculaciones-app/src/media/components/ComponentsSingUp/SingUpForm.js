import {Button,Form} from 'react-bootstrap'
import {Link} from  'react-router-dom';
import * as Yup from 'yup';
import { Formik} from 'formik';
import '../../styles/form.css';
import  {useSingUpUserContext}  from '../../../LoginProvider';
const SingUpForm =() => {


  let errorSubmit=' '
  const schema = Yup.object().shape({
    email: Yup.string().email('El valor ingresado no es un email').required('el email es obligatorio').trim('El email no permite espacios en blanco'),
    password: Yup.string()
      .required('La contraseña es obligatoria.') 
      .min(8, 'La contraseña debe tener mínimo 8 caracteres'),
    confir:Yup.string().oneOf([Yup.ref('password'), null], 'las contrasenas no son iguales')
      .required('La contraseña es obligatoria.') 
      .min(8, 'La contraseña debe tener mínimo 8 caracteres'),
  });

  const SingUp=useSingUpUserContext();

  return (
    <Formik    
        validationSchema={schema}
            initialValues={{
                email:'',
                password:'',
                confir:'',
            }}
            onSubmit={values => {
               errorSubmit= SingUp(values.email,values.password,values.confir);
            }}
            >
            {({handleChange, handleSubmit, handleBlur, values ,touched , errors}) => (
              <Form className="form" >
                <h1 className="encabezado-3 title">Registrarse</h1>
                <Form.Group className="mb-3" controlId="CorreoSingUp" >
                  <Form.Label className="encabezado-4 label" >Correo Electrónico:</Form.Label>
                  <p className="text-5 label-secundary">debe ser de formato de mail valido 'email@dominio.com'</p>
                  <Form.Control  
                      type="email"
                      name='email'
                      onChange={handleChange} 
                      onBlur={handleBlur} 
                      value={values.email} 
                      isValid={touched.email && !errors.email}
                      isInvalid={touched.email && errors.email}
                    />
                    <Form.Control.Feedback type='invalid'>
                        {errors.email }
                    </Form.Control.Feedback>
                    {
                      errorSubmit.email ? <p className='error-submit'>{errorSubmit.email}</p> : ""
                    }
                </Form.Group>    
                <Form.Group className="mb-3" controlId="ContraseñaSingUp" >
                  <Form.Label className="encabezado-4 label">Contraseña:</Form.Label>
                  <p className="text-5 label-secundary">debe ser de mínimo 8 caracteres</p> 
                  <Form.Control 
                        type="password" 
                        name='password' 
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        isValid={touched.password && !errors.password}
                        isInvalid={touched.password && errors.password}
                    />
                    <Form.Control.Feedback type='invalid'>
                        {errors.password }
                    </Form.Control.Feedback>
                    {
                      errorSubmit.password ? <p>{errorSubmit.password}</p> : ""
                    }
                </Form.Group>
                  <Form.Group className="mb-3" controlId="contraseñaconfig2" >
                  <Form.Label className="encabezado-4 label">Confirmar contraseña:</Form.Label>
                  <Form.Control className='mb-4'
                        type="password" 
                        name='confir' 
                        onBlur={handleBlur}
                        onChange={handleChange} 
                        value={values.confir}
                        isValid={touched.confir && !errors.confir}
                        isInvalid={touched.confir && errors.confir}
                    />
                    <Form.Control.Feedback type='invalid'>
                        {errors.confir }
                    </Form.Control.Feedback>
                  <Link to="/LoginPage" className="text-5 link">¿Ya tienes una cuenta? Iniciar Sesión</Link>
                </Form.Group>
                <Button className="btn btn-form" type='submit' onClick={handleSubmit} value='Enviar'>Registrarse</Button>
              </Form>
               )}
      </Formik>
  );
}

export default SingUpForm;