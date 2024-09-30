import React from "react";
import { useState, useEffect } from "react";
import 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import { PlayCircle } from "@mui/icons-material";
import { Box, Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import '../../pages/Home/Container/zingchart/zingchart.scss'

function ZingChartChild(props) {

    const navigate = useNavigate();

    const handleClickToZingChart = () => {
        navigate('/zingchart');
    };

    //lấy dữ liệu từ slide.json
    var zing = 'http://localhost:3001/zingchart';
    const [zingChart, setZingChart] = useState([]);
    /*const [view, setView] = useState([]);
    const [songData, setSongData] = useState([]);
    const [totalViews, setTotalViews] = useState(0);*/

    useEffect(() => {
        const fetchData
            = async () => {
                const response = await fetch(zing);
                const data = await response.json();
                setZingChart(data);
            };
        fetchData();
    }, []);
    const topSongs = zingChart.sort((a, b) => b.view - a.view).slice(0, props.all);
    const topSongss = zingChart.sort((a, b) => b.view - a.view).slice(0, props.three);
    const totalView = topSongs.reduce((total, song) => total + song.view, 0);
    const namesong = topSongss.map(song => song.title);
    const viewsong = topSongss.map(song => ((song.view / totalView) * 100).toFixed(2))
    const ColorTopsong = ['rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)', 'rgba(255, 159, 64, 0.6)']
    // Chuẩn bị dữ liệu cho biểu đồ
    const chartData = {
        labels: namesong,
        datasets: [
            {
                label: '% Lượt nghe',
                data: viewsong,
                backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)', 'rgba(255, 159, 64, 0.6)']
            }
        ]
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
                max: 100
            }
        }
    };
    return (
        <div className="container-zing-chart">
            <h2 className="title-zingchart">#ZingChart
                <PlayCircle sx={{ color: 'white', fontSize: '32px', marginLeft: '10px' }} />
            </h2>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={12} md={12} lg={props.size2}>
                    <Bar data={chartData} options={options} />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={props.size1}>
                    <Box>
                        {topSongs.map((song, index) => (
                            <li key={index} className="zingchart-bxh-container">
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: 'auto' }}>
                                    <span className="stt-bxh" style={{ WebkitTextStroke: `2px ${ColorTopsong[index]}`, marginRight: '10px' }}>{index + 1}</span>
                                    <img src={song.path} className="avatar-zingchart" alt="" />
                                    <Box >
                                        <h4 className="bxh-name-song">{song.title}</h4>
                                        <h5 className="bxh-name-singer">{song.singer}</h5>
                                    </Box>
                                </Box>
                                <span style={{ display: `${props.style}` }} className="view-song">{viewsong[index]}</span>
                            </li>
                        ))}
                    </Box>
                </Grid>

            </Grid>
            <Box sx={{ textAlign: 'center', display: `${props.style}` }}>
                <Button variant="outlined" onClick={handleClickToZingChart} sx={{ color: 'white', border: '1px solid white', borderRadius: '50px', padding: '8px 30px' }}>Xem Thêm</Button>
            </Box>
        </div>
    )
}

export default ZingChartChild;