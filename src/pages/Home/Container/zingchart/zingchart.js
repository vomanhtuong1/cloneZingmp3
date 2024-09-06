import React from "react";
import { useState, useEffect } from "react";
import 'chart.js/auto';
import { Bar, Line } from 'react-chartjs-2';

function ZingChart() {

    //lấy dữ liệu từ slide.json
    var zing = 'http://localhost:3001/zingchart';
    const [zingChart, setZingChart] = useState([]);
    const [view, setView] = useState([]);
    const [songData, setSongData] = useState([]);
    const [totalViews, setTotalViews] = useState(0);

    useEffect(() => {
        const fetchData
            = async () => {
                const response = await fetch(zing);
                const data = await response.json();
                setZingChart(data);
            };
        fetchData();
    }, []);
    const topSongs = zingChart.sort((a, b) => b.view - a.view).slice(0, 3);
    const totalView = topSongs.reduce((total, song) => total + song.view, 0);
    const namesong = topSongs.map(song => song.title);
    const viewsong = topSongs.map(song => ((song.view / totalView) * 100).toFixed(2))
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
        <div>
            <h2 style={{ color: 'white', margin: '30px 0' }}>ZingChart</h2>
            <Bar data={chartData} options={options} />
        </div>
    )
}

export default ZingChart;