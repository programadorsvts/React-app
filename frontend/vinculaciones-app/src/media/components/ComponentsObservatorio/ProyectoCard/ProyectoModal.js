
import {Modal,CloseButton } from 'react-bootstrap';
import './modal.css';

function ProyectoModal(props) {
  return (
        <>
            <Modal {...props} size="lg"  aria-labelledby="contained-modal-title-vcenter" centered >
               
                
                <Modal.Body className='modal-body'>
                    <CloseButton />
                    <p  className='text-deg'>Salud</p>{/* Por que text-deg tiene  la propiedad in line  */}             
                    <h4 className='encabezado-2 mt-3'>Jabón en comprimidos</h4>
                    <p  className='encabezado-4'>Director/a :</p>
                    <p className='encabezado-4'>Organizacion :</p>
                    <p className='text-1' >Contacto:</p>
                    <p className='text-2' >mail</p>
                    <p className='text-2' >2664006580</p>
                    <p className='text-2' >Direccion calle 3 </p>
                    <p className='encabezado-2' >Descripcion: </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut est vel enim vestibulum ornare in vitae turpis. Quisque at nulla erat. Maecenas vitae dui vestibulum, sagittis justo a, tincidunt nisi. Morbi molestie volutpat nulla sed fermentum. Integer rutrum consequat lorem, eu iaculis nunc dignissim ac. Donec semper nisi sit amet lacus euismod tristique. Pellentesque rhoncus sed elit non rhoncus. Vestibulum eu libero rutrum, euismod velit non, posuere quam. Praesent rhoncus magna et ligula convallis, quis porttitor arcu rhoncus. Vestibulum a enim sed ex imperdiet congue non sed ante. Nam eros risus, egestas a felis et, congue fringilla diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam nisl orci, ultrices nec sollicitudin ut, consequat ac magna. Etiam efficitur quam orci, ut sodales urna vulputate a. Phasellus lacus felis, tempor eleifend egestas vel, semper at tortor
                    </p>
                </Modal.Body>

              </Modal>
      </>  
  );
}

export default ProyectoModal;
