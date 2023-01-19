import React from 'react';
import axios from "axios";
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';


export function TracksInfo() {

  // // const Add = async () => {
  // //   let config = {
  // //     method: 'post',
  // //     url: 'https://localhost:7125/api/Songs',
  // //     headers: {
  // //       Authorization:
  // //         "Bearer " + JSON.parse(localStorage.getItem("Token")).accessToken,
  // //       "Content-Type": "application/json",
  // //     }
  // //   };

  //   axios(config)
  //     .then(function (response) {
  //       //console.log(JSON.stringify(response.data));
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };

  return (

      <div className='m-3 w-25 mx-auto'>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Song title</Form.Label>
            <input id='TitleInput' type="text" class="form-control" placeholder="Title..." />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Song Path</Form.Label>
            <input id='SongInput' type="text" class="form-control" placeholder="Path..." />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Album</Form.Label>
            <input id='AlbumInput' type="number" class="form-control" placeholder="Album..." />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Genre</Form.Label>
            <input id='GenreInput' type="number" class="form-control" placeholder="Genre..." />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
  );
}

export default TracksInfo;
