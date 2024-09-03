import './Chill.scss';
import { ArrowForwardIos } from '@mui/icons-material';
import { useState, useEffect } from 'react';

function Chill() {
    //lấy dữ liệu từ slide.json
    var Chill = 'http://localhost:3001/chill';
    const [chill, setChill] = useState([]);

    useEffect(() => {
        const fetchData
            = async () => {
                const response = await fetch(chill);
                const data = await response.json();
                setChill(data);
            };
        fetchData();
    }, []);

    return (
        <div className='Chill' style={{ margin: "20px 0" }}>
            <h1 className='title-chill' style={{ color: "white" }}>Chill</h1>
            <button className='btn-all sixe'>
                <div className='all'>
                    <p>TẤT CẢ</p>
                    <ArrowForwardIos sx={{ marginLeft: "5px", fontWeight: "300", fontSize: "1rem" }} /></div>
            </button>
        </div>
    )
}

export default Chill;