import Card from "react-bootstrap/Card";
import { CardActionArea } from '@mui/material';
import Col from "react-bootstrap/Col";



function CustomCardAlbum({ data }) {
  console.log("ee", data)

  const Submit = () => {
    window.location = "/tracks/" + data.id
  }

  return (
    <Col className=" my-3" md={2}>
    <Card style={{ backgroundColor: "#555755" }} onClick={Submit}>
      <CardActionArea>
        <Card.Img className="p-2" variant="top" src={data.cover} />
        <Card.Body className="pt-0">
          <Card.Title>{data.name}</Card.Title>
          <p style={{ color: 'rgba(190,190,190, 0.8)' }}>
            {"by " + data.artist.name}
          </p>
          <p className="blockquote-footer" style={{ color: 'rgba(190,190,190, 0.8)' }}>
            {new Date(data.createdAt).getFullYear()}
          </p>
        </Card.Body>
      </CardActionArea>
    </Card>
    </Col>
  );
}

export default CustomCardAlbum;
