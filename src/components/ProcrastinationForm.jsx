import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import ConfirmModal from './ConfirmModal';

export default function ProcrastinationForm({ onSubmit }) {
  const [submitClickCount, setSubmitClickCount] = useState(0);
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [displayConfirmModal, setDisplayConfirmModal] = useState(false);

  const resetForm = () => {
    setSubject('');
    setDescription('');
  };

  const handleSubmit = () => {
    setSubmitClickCount(0);
    onSubmit({ subject, description });
    resetForm();
  };

  useEffect(() => {
    if (submitClickCount >= 3) {
      setDisplayConfirmModal(true);
    } else {
      setDisplayConfirmModal(false);
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
            placeholder='Not mandatory = skip it'
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

      <ConfirmModal
        show={displayConfirmModal}
        handleSubmit={handleSubmit}
        handleClose={() => setDisplayConfirmModal(false)}
      />
    </>
  );
}
