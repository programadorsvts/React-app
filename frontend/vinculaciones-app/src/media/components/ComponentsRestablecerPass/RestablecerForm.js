import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import * as Yup from 'yup';
import { Formik} from 'formik';

import '../../styles/form.css';

function restablecerform() {

     const schema = Yup.object().shape({
      email: Yup.string()
      .email('El valor ingresado no es un email')
      .required('el email es obligatorio')
      .trim('El email no permite espacios en blanco'),
      });

  return(
      <Formik    
          validationSchema={schema}
              initialValues={{
                  email:'',
              } }
              onSubmit={values => {
                // HACER PETICION A: Enviar reestablecimiento de contraseña
                // VALIDAR ACÁ si es unsl.edu.ar o email.unsl.edu.ar
              alert(JSON.stringify(values, null, 2));
              }}
              >    
      
              {({handleChange, handleSubmit, handleBlur, values ,touched , errors}) => (
                <Form onSubmit={handleSubmit} className="form">
                  <h1 className='encabezado-3 title'>Reestablecimiento de Contraseña</h1>
                  <Form.Group className="mb-3" controlId="correorestablecer1" >
                    <Form.Label className="encabezado-4 label">Correo Electrónico:</Form.Label>
                    <p className="text-5 label-secundary">debe ser de formato unsl.edu.ar o email.unsl.edu.ar</p>
                    <Form.Control 
                      name='email' 
                      type="text" 
                      placeholder=""  
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.email && !errors.email}
                      isInvalid={touched.email && errors.email}
                      />

                      <Form.Control.Feedback type='invalid'>
                          {errors.email}
                      </Form.Control.Feedback>
                  </Form.Group>
                  <Button className="btn btn-form"onClick={handleSubmit}>Confirmar</Button>
                </Form>
              )}
        </Formik>
    )
}

export default restablecerform;