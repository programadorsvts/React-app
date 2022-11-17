
import {Modal} from 'react-bootstrap';
import './modal.css';

function modal(props) {

  return (
        <>
          <Modal {...props} className='modal modal-90w'  >

            <Modal.Body    className='modal-body' >
    
            
            </Modal.Body>
          </Modal>
      </>  

  );
}

export default modal;
