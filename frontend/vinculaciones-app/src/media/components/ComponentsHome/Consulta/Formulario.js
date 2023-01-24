import {Button,Form} from 'react-bootstrap';
import '../../../styles/form.css';
import './form-contacto.css';
import * as Yup from 'yup';
import { Formik,} from 'formik';
import { useState,useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

 export const Formulario = () => {

  const regExp = {
    telefono: /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  }

  const schema = Yup.object().shape({
    name: Yup.string().min(2, 'El nombre es demasiado corto').max(50, 'El nombre es demasiado largo').required('El nombre es obligatorio').trim('los espacio en blanco no estan permitidos '),
    email:Yup.string().email('El valor ingresado no es un email').required('El email es obligatorio').trim('El email no permite espacios en blanco').trim('los espacio en blanco no estan permitidos '),
    telephone: Yup.string().matches(regExp.telefono, "El valor ingresado no es un telefono").max(15).trim('los espacio en blanco no estan permitidos '),
    consulta: Yup.string().max(500, 'La consulta es demasiado larga').required("Debe ingresar su consulta").trim('los espacio en blanco no estan permitidos '),
  });

  const [isSubmited, setIsSubmited] = useState(false)
  const form = useRef();
  
   const SendEmail = (e) => {
   
    e.preventDefault();
    emailjs.sendForm('service_vd3tb4o', 'template_zjx272g', form.current, 'A9urjmdZT3uPy4bs2')
      .then((result) => {
          console.log(result.text);
          Swal.fire({
            icon: 'success',
            title: 'Consulta enviada Exitosamente',
            timer: 2500
          })
      }, (error) => {
          console.log(error.text);
      });
  };
    

  return(
  <Formik  
      validationSchema={schema}
      initialValues={{
        name:'',
        email:'',
        telephone:'',
        consulta:'',
      } }
      onSubmit={values => {
        alert(JSON.stringify(values, null, 2));
        setIsSubmited(true)
        console.log(isSubmited)
      }}
  >
  {({handleChange, handleSubmit, handleBlur, values, touched ,errors}) => (
        <Form className='form form-contacto' ref={form} onSubmit={SendEmail}>
          <Form.Group controlId="Input1">
            <Form.Label className="encabezado-4">Nombre</Form.Label>
            <Form.Control 
              name='name' 
              type="text" 
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              isValid={touched.name && !errors.name}
              isInvalid={touched.name && errors.name}
              />
            <Form.Control.Feedback type='invalid'>
                {errors.name}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="Input2">
            <Form.Label className="encabezado-4">Correo electrónico</Form.Label>
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
          <Form.Group controlId="lInput3">
            <Form.Label className="encabezado-4">Teléfono</Form.Label>
            <Form.Control 
              name='telephone' 
              type="text" 
              value={values.telephone}
              onChange={handleChange}
              onBlur={handleBlur}
              isValid={touched.telephone && !errors.telephone}
              isInvalid={touched.telephone && errors.telephone}
              />
            <Form.Control.Feedback type='invalid'>
              {errors.telephone}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="Textarea">
            <Form.Label className="encabezado-4">Consulta</Form.Label>
              <Form.Control as="textarea" rows={5} 
                name='consulta' 
                onBlur={handleBlur}
                value={values.consulta}
                onChange={handleChange}
                isValid={touched.consulta && !errors.consulta}
                isInvalid={touched.consulta && errors.consulta}
                />
              <Form.Control.Feedback type='invalid'>
                {errors.consulta}
              </Form.Control.Feedback>
          </Form.Group>
          <Button className='mt-3' onClick={SendEmail }>Enviar</Button><br></br>
          
        </Form>
        )}
    </Formik>
    )
};
 export default Formulario;