
import {Modal,CloseButton } from 'react-bootstrap';
import {useState} from 'react'
import './modal.css';

function ProyectoModal(props) {

        const [show, setShow] = useState(true);
  

  return (
        <>

            <Modal  {...props} >
               
                
                <Modal.Body className=' '>

                    <CloseButton  show={show} onClick={ () => setShow(false) }/>
                    <p  className=' encabezado-2 text-deg '>{props.area}</p>{/* Por que text-deg tiene  la propiedad in line  */}             
                    <h4 className='encabezado-2 '>{props.titulo}</h4>
                    <p  className='encabezado-4'>Director/a : {props.director}</p>
                    <p className='encabezado-4'>Organizacion : {props.organizacion}</p>
                    <p className='text-1' >Contacto: {props.contacto}</p>
                    <p className='text-2' >{props.email}</p>
                    <p className='text-2' >{props.numero}</p>
                    <p className='text-2' >{props.direccion} </p>
                    <p className='encabezado-2' >Descripcion:  </p>
                    <p className='encabezado-2' >{props.direccion} </p>
              
                </Modal.Body>

              </Modal>
      </>  
  );
}

export default ProyectoModal;
