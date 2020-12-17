import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Trash } from 'react-bootstrap-icons';
import { LazyPanda } from '../assets/images';
import DeleteConfirmModal from './DeleteConfirmModal';

export default function ProcrastinationCard({ procrastination, deleteAction }) {
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  const handleSubmit = () => {
    deleteAction(procrastination.id);
    setShowConfirmDialog(false);
  };

  return (
    <>
      <Card>
        <Card.Img variant='top' src={LazyPanda} />
        <Card.Body>
          <Card.Title>{procrastination.subject}</Card.Title>
          <Card.Text>{procrastination.description}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button onClick={() => setShowConfirmDialog(true)}>
            <Trash />
          </Button>
        </Card.Footer>
      </Card>

      <DeleteConfirmModal
        show={showConfirmDialog}
        handleSubmit={handleSubmit}
        handleClose={() => setShowConfirmDialog(false)}
      />
    </>
  );
}
