import { ListGroup, Card } from 'react-bootstrap';
import { LazyPanda } from '../assets/images';

export default function ProcrastinationList({ list }) {
  console.info(list);
  return (
    <ListGroup>
      {list.map((item, index) => (
        <ListGroup.Item key={index}>
          <Card>
            <Card.Img variant='top' src={LazyPanda} />
            <Card.Body>
              <Card.Title>{item.subject}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
            </Card.Body>
          </Card>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
