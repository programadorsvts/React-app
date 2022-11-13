import {Button,Form} from 'react-bootstrap';
import '../../../styles/form.css';
import * as Yup from 'yup';
import { Formik, useFormik,} from 'formik';








 export const Formulario = () => {

          const schema = Yup.object().shape({

           email:Yup.string().email('Email no valido').required('Required'),
           name: Yup.string().min(2, 'Nombre no valido').max(30, 'Nombre no valido!').required('Required'),
           telephone: Yup.number(),
           description: Yup.string().min(2, 'Nombre no valido').max(600, 'Nombre no valido!').required('Required'),
           
           
          });
  

    return(
              <Formik  
                  validationSchema={schema}
                  initialValues={{
                      name:'',
                      email:'',
                      telephone:'',
                      description:'',
                  } }
                  onSubmit={values => {
                    alert(JSON.stringify(values, null, 2));
                  }}

              >    
              {({handleChange, handleSubmit,  values ,touched , errors}) => (
                    <Form onSubmit={handleSubmit}>
                      
                          <Form.Group className="" controlId="Input1">
                            <Form.Label className="mt-2">Nombre</Form.Label>
                                <Form.Control 
                                  name='name' 
                                  type="text" 
                                  placeholder=""  
                                  value={values.name}
                                  onChange={handleChange}
                                  isValid={touched.name && !errors.name}
                                  isInvalid={!!errors.name}
                                  />
                                <Form.Control.Feedback type='invalid'>
                                   {errors.name && <p>nombre no valido</p>}
                                </Form.Control.Feedback>
                                
                        </Form.Group>

                          <Form.Group className="" controlId="Input2">
                            <Form.Label className="mt-2">Email</Form.Label>
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
                                   {errors.email  && <p>Email no valido</p> }
                                </Form.Control.Feedback>
                               
                              
                        </Form.Group>
                          <Form.Group className="" controlId="lInput3">
                            <Form.Label className="mt-2">Telefono</Form.Label>
                                <Form.Control 
                                  name='telephone' 
                                  type="text" 
                                  placeholder=""  
                                  value={values.telephone}
                                  onChange={handleChange}
                                  isValid={touched.telephone && !errors.telephone}
                                  isInvalid={!!errors.telephone}
                                  />
                                <Form.Control.Feedback type='invalid'>
                                  {errors.telephone && <p>telefono no valido</p>}
                                </Form.Control.Feedback>
                          </Form.Group>


                        <Form.Group className="" controlId="Textarea">
                            <Form.Label className="mt-2">descripcion</Form.Label>
                          
                                <Form.Control  as="textarea" rows={9} 
                                   name='description' 
                                    placeholder=""  
                                    value={values.description}
                                    onChange={handleChange}
                                    isValid={touched.description && !errors.description}
                                    isInvalid={!!errors.description} 
                                 />  
                                <Form.Control.Feedback type='invalid'>
                                   {errors.description && <p>description no valida</p>}
                                </Form.Control.Feedback> 
                                  
                        </Form.Group>
                        <Button className='mt-3' onClick={handleSubmit}>Enviar</Button>
                        <br/>
                        
                    </Form>
                
              )}
          </Formik>       
    )
};
 export default Formulario ;




/* function formulario() {
  return (
    <Form className="  ">

        <Form.Group className="" controlId="exampleForm.ControlInput1">
        
            <Form.Label className="ms-2">Nombre y apellido</Form.Label>
                <Form.Control type="text" placeholder=""  />
            <br />

            <Form.Label className="">Email </Form.Label>
            <Form.Control type="email" placeholder="ejemplo@unsl.com" />
            <br />
        
            <Form.Label className="">Telefono</Form.Label>
            <Form.Control type="text" placeholder="+54 ....." />
            <br />
        </Form.Group>

        <Form.Group className="" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="ms-4">Descripcion</Form.Label>
            <Form.Control as="textarea" rows={9} />  
        </Form.Group>
        <Button className=''>Enviar</Button>

    </Form>
  
  );
} */




