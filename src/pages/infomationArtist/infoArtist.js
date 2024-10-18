import React from "react";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Button } from "@mui/material";
import { PlayCircleFilledOutlined, Done, PersonAdd } from "@mui/icons-material";
import NewlyArtist from "../../Components/Component/newlyArtist";
import FeatureSong from "../../Components/Component/featureSong";
import './infoArtist.scss'

function InforArtist(props) {
    const { id } = useParams();
    //lấy dữ liệu từ slide.json
    var InfoAPI = 'http://localhost:3001/newlyReleased';
    const [info, setInfo] = useState([]);
    const [name, setName] = useState([]);


    useEffect(() => {
        const fetchData
            = async () => {
                const response = await fetch(InfoAPI);
                const data = await response.json();
                setInfo(data);
                // Tìm phần tử có id = 3 ngay khi dữ liệu được fetch
                const foundItem = data.find(item => item.id === `${parseInt(id)}`);
                setName(foundItem);
            };
        fetchData();
    }, []);

    return (
        <div className="Infomation-artist">
            <div className="avatar-artist" style={{ backgroundImage: `url(http://localhost:3000/${name.path})` }}>

            </div>
            <div className="avatar-info">
                <img className="avatar-singer-info" style={{ width: "175px", height: "175px" }} src={`http://localhost:3000/${name.path}`} alt={name.singer} />
                <div className="infomation-singer">
                    <div className="name-singer">
                        <h1 style={{ color: "white", fontSize: "60px" }} >{name.singer}</h1>
                        <PlayCircleFilledOutlined sx={{ color: "#8B45CA", fontSize: "60px", marginLeft: "10px" }} />
                    </div>
                    <div className="follower-of-singer">
                        <h3>? Số Người Quan Tâm</h3>
                        <Button variant="outlined" sx={{
                            color: "white", borderRadius: "25px",
                            border: '1px solid rgba(255, 255, 255, 0.3)', padding: "3px 30px"
                        }}><PersonAdd sx={{ marginRight: "5px" }} /> Quan Tâm</Button>
                    </div>
                </div>
            </div>
            <div className="list-of-artist">
                <NewlyArtist />
                <FeatureSong />
            </div>
        </div>
    )
}

export default InforArtist;