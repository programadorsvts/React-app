
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useState} from 'react'
import './modal.css';

function ProyectoModal(props) {

        const [show, setShow] = useState(true);
  
  return (
        <>
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header closeButton>
                <Modal.Title className='text-1 text-deg text-capitalize' id="contained-modal-title-vcenter">
                {props.area}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4 className='encabezado-2 mb-3'>{props.titulo}</h4>
                <p className='encabezado-4 mb-1'>Director/a: Walter White</p>
                <p className='encabezado-4 mb-4'>Organización privada</p>
                <p className='text-1 mb-1'>CONTACTO:</p>
                <p className='text-2 mb-1'>walterwhite@gmail.com</p>
                <p className='text-2 mb-1'>2664-123456</p>
                <p className='text-2 mb-4'>nombre calle 1234</p>
                <p className='text-1 mb-1'>DESCRIPCIÓN:</p>
                <p >Rutrum at turpis. Donec mollis massa in ipsum pretium iaculis. Duis sed fringilla 
                malesuada fames ac ante ipsum primis in faucibus. Proin lectus ligula, suscipit et aliquam in, rutrum at turpis. Donec mollis.
                Rutrum at turpis. Donec mollis massa in ipsum pretium iaculis. Duis sed fringilla 
                malesuada fames ac ante ipsum primis in faucibus. Proin lectus ligula, suscipit et aliquam in, rutrum at turpis. Donec mollis massa in ipsum pretium iaculis. Duis sed fringilla.
                Rutrum at turpis. Donec mollis massa in ipsum pretium iaculis. Duis sed fringilla 
                malesuada fames ac ante ipsum primis in faucibus. Proin lectus ligula, suscipit et aliquam in, rutrum at turpis. Donec mollis.
                Rutrum at turpis. Donec mollis massa in ipsum pretium iaculis. Duis sed fringilla 
                malesuada fames ac ante ipsum primis in faucibus. Proin lectus ligula, suscipit et aliquam in, rutrum at turpis. Donec mollis massa in ipsum pretium iaculis. Duis sed fringilla.
                Rutrum at turpis. Donec mollis massa in ipsum pretium iaculis. Duis sed fringilla 
                malesuada fames ac ante ipsum primis in faucibus. Proin lectus ligula, suscipit et aliquam in, rutrum at turpis. Donec mollis.
                Rutrum at turpis. Donec mollis massa in ipsum pretium iaculis. Duis sed fringilla 
                malesuada fames ac ante ipsum primis in faucibus. Proin lectus ligula, suscipit et aliquam in, rutrum at turpis. Donec mollis massa in ipsum pretium iaculis. Duis sed fringilla.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Cerrar</Button>
            </Modal.Footer>
            </Modal>
            
            
            
            
            
            
            
      </>  
  );
}

export default ProyectoModal;
