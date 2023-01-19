import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Table } from "react-bootstrap";
import { serverSideVariable1 } from "../../EnvVariable/EnvVariable";

export function Tracks() {
    const [finaldata, setGenreData] = useState(0);

    useEffect(() => {
        const getData = async () => {
            var configGenre = {
                method: "get",
                url: serverSideVariable1()+ "/api/Songs/GetAllSongs",
                headers: {
                    'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("Token")).accessToken
                }
            };

            console.log(configGenre)

            axios(configGenre)
                .then(function (response) {
                    console.log(response.data)
                    setGenreData(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
        };
        getData();
    }, []);

    const Remove = (id) => {
        let configGenre = {
            method: "post",
            url: serverSideVariable1()+"/api/Songs/RemoveSong?id=" + id,
            headers: {
                'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("Token")).accessToken
            }
        };

        axios(configGenre)
            .then(function (response) {
                console.log(response.data)
                window.location.reload();
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const Publish = (id) => {
        var configGenre = {
            method: "post",
            url: serverSideVariable1()+"/api/Songs/PublishSong?id=" + id,
            headers: {
                Authorization:
                    "Bearer " + JSON.parse(localStorage.getItem("Token")).accessToken,
                "Content-Type": "application/json",
            }
        };

        axios(configGenre)
            .then(function (response) {
                console.log(response.data)
                window.location.reload();

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className='m-0'>
            {finaldata &&

                <div className='m-3'>
                    <Table striped bordered hover variant="light">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>In Ablum:</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {finaldata.map((item, Index) => {
                                return (
                                    <tr>
                                        <td>{Index}</td>
                                        <td>{item.title}</td>
                                        <td>{item.album.name}</td>
                                        <td>{item.status === 1 ? <Button variant="danger" onClick={() => Remove(item.id)}>Remove</Button> : <Button variant="primary" onClick={() => Publish(item.id)}>Publish</Button>}</td>
                                    </tr>

                                )
                            })}

                        </tbody>

                    </Table>

                </div>
            }
        </div >
    );
}

export default Tracks;
