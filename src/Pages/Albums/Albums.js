import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Table } from "react-bootstrap";
import {serverSideVariable1} from "../../EnvVariable/EnvVariable"

export function Albums() {
    const [finaldata, setGenreData] = useState(0);

    useEffect(() => {
        const getData = async () => {
            var configGenre = {
                method: "get",
                url: serverSideVariable1()+ "/api/Albums/GetAllAlbums",
                headers: {
                    "Authorization": "Bearer " + JSON.parse(localStorage.getItem("Token")).accessToken
                }
            };

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
            url: "https://localhost:7125/api/Albums/RemoveAlbum?id=" + id,
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
            url: "https://localhost:7125/api/Albums/PublishAlbum?id=" + id,
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
                                <th>Songs in album</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {finaldata.map((item, Index) => {
                                return (
                                    <tr>
                                        <td>{Index}</td>
                                        <td>{item.name}</td>
                                        <td>{item.tblSongs.length}</td>
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

export default Albums;
