import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function DeleteConfirmModal({ show, handleClose, handleSubmit }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>You got to be kidding me?!</Modal.Title>
      </Modal.Header>
      <Modal.Body>Right after I created this thing you want me to delete it?</Modal.Body>
      <Modal.Footer>
        <Button variant='primary' onClick={handleClose}>
          Nope, how foolish of me!
        </Button>
        <Button variant='secondary' onClick={handleSubmit}>
          Yes, I don't care about other people's feelings
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
