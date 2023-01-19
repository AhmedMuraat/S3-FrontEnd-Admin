import Row from "react-bootstrap/Row";
//import PostService from "../../services/post.service";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import CustomCard from "../../Components/CustomCardsSong"
import {serverSideVariable1} from "../../EnvVariable/EnvVariable"

export function HomeTop() {
    const [Data, setGenreData] = useState(0);

    useEffect(() => {
        const getData = async () => {
            var configGenre = {
                method: "get",
                url: serverSideVariable1()+ "/api/Songs/top10songsnewestsongs",
                headers: {
                    Authorization:
                        "Bearer " + JSON.parse(localStorage.getItem("Token")).accessToken,
                    "Content-Type": "application/json",
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




    return (
        <Row className=" mx-3 mt-3 text-light">
            <h1>Top 10 Newest songs</h1>

            {Data &&
                Data.map((item, gIndex) => {
                    return (
                        <CustomCard data={item}></CustomCard>
                    );
                })
            }
        </Row>
    );
}

export default HomeTop;
