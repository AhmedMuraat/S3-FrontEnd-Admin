import { Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import AlbumCard from "../Components/CustomCards"
import { serverSideVariable1 } from "../EnvVariable/EnvVariable";

function CardRow({ genre }) {

    const [responseData, setData] = useState(0);
    useEffect(() => {
        const getData = async () => {
            var config = {
                method: "get",
                url: serverSideVariable1()+ "/GetAlbumFromGenre?genreId=" + genre.id,
                headers: {
                    Authorization:
                        "Bearer " + JSON.parse(localStorage.getItem("Token")).accessToken,
                    "Content-Type": "application/json",
                }
            };

            axios(config)
                .then(function (response) {
                    setData(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });

        };
        getData();
    }, []);

    return (
        <Row>
            {responseData &&
                responseData.map((item, gIndex) => {
                    return (
                        <AlbumCard data={item}></AlbumCard>
                    );
                })}
        </Row>
    );
}

export default CardRow;
