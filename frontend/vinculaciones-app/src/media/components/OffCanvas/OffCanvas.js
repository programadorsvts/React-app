import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

const options = [
  {
    name: 'OffCanvas',
    scroll: true,
    backdrop: true,
  },
];

function OffCanvas({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <>
      <Button variant="secondary" onClick={toggleShow} className="me-2">
        {name} 
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Probando Menu Login</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function Off() {
  return (
    <>
      {options.map((props, idx) => (
        <OffCanvas key={idx} {...props} />
      ))}
    </>
  );
}

export default OffCanvas;