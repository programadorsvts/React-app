
import {Modal,CloseButton } from 'react-bootstrap';
import './modal.css';

function ProyectoModal(props) {
  return (
        <>
            <Modal {...props} size="lg"  aria-labelledby="contained-modal-title-vcenter" centered >
               
                
                <Modal.Body className='modal-body'>
                    <CloseButton />
                    <p  className=' text-deg'>Salud</p>                    
                    <h4 className='encabezado-2 mt-3'>Jabón en comprimidos</h4>
                    <p  className='encabezado-4'>Director/a :</p>
                    <p className='encabezado-4'>Organizacion :</p>
                    <p className='text-1' >Contacto:</p>
                    <p className='text-2' >mail</p>
                    <p className='text-2' >2664006580</p>
                    <p className='text-2' >Direccion calle 3 </p>
                    <p className='encabezado-2' >Descripcion: </p>
                </Modal.Body>

              </Modal>
      </>  
  );
}

export default ProyectoModal;
