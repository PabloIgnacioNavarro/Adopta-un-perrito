import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

// eslint-disable-next-line react/prop-types
const MyCard = ({ titulo, texto, url, descripcion }) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={url} />
        <Card.Body className="row">
          <Card.Title>{titulo}</Card.Title>
          <Card.Text>{descripcion}</Card.Text>
          <Button variant="primary">{texto}</Button>
        </Card.Body>
      </Card>
    </>
  );
};
export default MyCard;
