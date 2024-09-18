import './radio.scss';
import { useEffect, useState } from 'react';
import { ArrowForwardIos } from '@mui/icons-material';

function Radio() {

    //lấy dữ liệu từ slide.json
    var radiolist = 'http://localhost:3001/top100';
    const [radio, setradio] = useState([]);

    useEffect(() => {
        const fetchData
            = async () => {
                const response = await fetch(radiolist);
                const data = await response.json();
                setradio(data);
            };
        fetchData();
    }, []);

    return (
        <div className='radio'>
            <div className='container-chill-title'>
                <h2 className='title-chill' style={{ color: "white" }}>RADIO</h2>
                <button className='btn-all sixe'>
                    <div className='all'>
                        <p>TẤT CẢ</p>
                        <ArrowForwardIos sx={{ marginLeft: "5px", fontWeight: "300", fontSize: "1rem" }} /></div>
                </button>
            </div>
        </div>
    )
}

export default Radio;