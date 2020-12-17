import { useState } from 'react';
import Navbar from './components/Navbar';
import { Container, Row, Col } from 'react-bootstrap';
import ProcrastinationForm from './components/ProcrastinationForm';
import ProcrastinationList from './components/ProcrastinationList';

function App() {
  const [procrastinations, setProcrastinations] = useState([]);

  return (
    <section>
      <Container>
        <Navbar />
      </Container>

      <Container style={{ textAlign: 'center' }}>
        <Row>
          <Col>
            <ProcrastinationForm
              onSubmit={(newProcrastination) => {
                setProcrastinations([...procrastinations, newProcrastination]);
              }}
            />
          </Col>
          <Col>
            {procrastinations.length > 0 && <ProcrastinationList list={procrastinations} />}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default App;
