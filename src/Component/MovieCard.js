import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MovieCard({el}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={el.image} />
      <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        <Card.Text>
          {el.info}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;