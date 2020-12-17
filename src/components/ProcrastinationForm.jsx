import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Form, Button } from 'react-bootstrap';
import CreateConfirmModal from './CreateConfirmModal';

export default function ProcrastinationForm({ onSubmit }) {
  const [submitClickCount, setSubmitClickCount] = useState(0);
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [showConfirmModal, setShowConfirmDialog] = useState(false);

  const resetForm = () => {
    setSubject('');
    setDescription('');
  };

  const handleSubmit = () => {
    setSubmitClickCount(0);
    onSubmit({ id: uuidv4(), subject, description });
    resetForm();
  };

  useEffect(() => {
    if (submitClickCount >= 3) {
      setShowConfirmDialog(true);
    } else {
      setShowConfirmDialog(false);
    }
  }, [submitClickCount]);

  return (
    <>
      <Form>
        <Form.Group controlId='formGroupSubject'>
          <Form.Label>Subject (*)</Form.Label>
          <Form.Control
            type='text'
            placeholder="Enter subject... or don't. I don't care."
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
          />
        </Form.Group>

        <Form.Group controlId='formGroupDescription'>
          <Form.Label>Description</Form.Label>
          <Form.Control
            type='textarea'
            placeholder='Not mandatory = skip it please'
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </Form.Group>

        <Button
          variant='primary'
          disabled={!subject.length}
          onClick={() => setSubmitClickCount(submitClickCount + 1)}
        >
          Submit
        </Button>
        {submitClickCount === 1 && <p>Nah, I don't feel like doing that</p>}
        {submitClickCount === 2 && <p>But I don't wannaaa</p>}
      </Form>

      <CreateConfirmModal
        show={showConfirmModal}
        handleSubmit={handleSubmit}
        handleClose={() => setShowConfirmDialog(false)}
      />
    </>
  );
}
