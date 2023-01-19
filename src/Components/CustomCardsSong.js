import Card from "react-bootstrap/Card";
import { CardActionArea, CardActions } from '@mui/material';
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";



function CustomCardAlbum({ data }) {

  const Submit = () => {
    window.location = "/tracks/" + data.tblSongs[0].albumId
  }

  return (
    <Col className=" my-3" md={2}>
    <Card style={{ backgroundColor: "#555755" }} onClick={Submit}>
      <CardActionArea>
        <Card.Img className="p-2" variant="top" src={data.cover ? data.cover : "https://www.wagbet.com/wp-content/uploads/2019/11/music_placeholder.png"} />
        <Card.Body className="pt-0">
          <Card.Title>{data.title}</Card.Title>
          
          <p className="blockquote-footer mt-2" style={{ color: 'rgba(190,190,190, 0.8)' }}>
            {new Date(data.createdAt).getFullYear()}
          </p>
          <Button> Play </Button>
        </Card.Body>
      </CardActionArea>
    </Card>
    </Col>
  );
}

export default CustomCardAlbum;
