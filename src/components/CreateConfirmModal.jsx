import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function ConfirmModal({ show, handleClose, handleSubmit }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Seriously?</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you really really sure that I need to do this right now?</Modal.Body>
      <Modal.Footer>
        <Button variant='primary' onClick={handleClose}>
          Nope, keep doing nothing
        </Button>
        <Button variant='secondary' onClick={handleSubmit}>
          Yes, I'm sure!
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
