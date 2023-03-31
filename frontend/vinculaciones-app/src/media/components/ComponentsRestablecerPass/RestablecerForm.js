import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Axios  from "axios"
import Swal from 'sweetalert2'

import { useNavigate } from 'react-router-dom'

import { API_URL } from "../../../config/env"
import * as Yup from 'yup';
import { Formik} from 'formik';

import '../../styles/form.css';

function RestablecerForm() {

      const navigate = useNavigate();
     const schema = Yup.object().shape({
      email: Yup.string()
      .email('El valor ingresado no es un email')
      .required('el email es obligatorio')
      .trim('El email no permite espacios en blanco'),
      });

    const ResetPassword=(email)=>{
       
              Axios.post(API_URL+'api/sendresetpassword',{"email":email })
              .then((response) =>{
                  Swal.fire ({ icon: 'success', title: 'Se envio el email de restablecimiento exitosamente', showConfirmButton: true, timer: 6000 })
                  navigate("/");
              })
              .catch((error) =>{
                
                  Swal.fire({ icon: 'error',title: 'Tuvimos un problema en encontrar el email del restablecimiento', text: error.response.data.message  })
                  navigate("/RestablecerPage");
              })  
    }

  return(
    <>
        <Formik    
            validationSchema={schema}
                initialValues={{
                    email:'',
                } }
                onSubmit={values => {
                  ResetPassword(values)
                }}
                >    
        
                {({handleChange, handleSubmit, handleBlur, values ,touched , errors}) => (
                  <Form onSubmit={handleSubmit} className="form">
                    <h1 className='encabezado-3 title'>Reestablecimiento de Contraseña</h1>
                    <Form.Group className="mb-3" controlId="correorestablecer1" >
                      <Form.Label className="encabezado-4 label">Correo Electrónico:</Form.Label>
                      <p className="text-5 label-secundary">debe ser de formato de email valido - email@dominio.com</p>
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
    </>      
    )
}

export default RestablecerForm;