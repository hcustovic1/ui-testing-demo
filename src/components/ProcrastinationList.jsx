import { ListGroup } from 'react-bootstrap';
import ProcrastinationCard from './ProcrastinationCard';

export default function ProcrastinationList({ list, deleteAction }) {
  return (
    <ListGroup>
      {list.map((item) => (
        <ListGroup.Item key={item.id}>
          <ProcrastinationCard procrastination={item} deleteAction={deleteAction} />
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
