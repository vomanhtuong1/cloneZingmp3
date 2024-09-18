import './Top100.scss';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { useEffect, useState } from 'react';

function Top100() {

    //lấy dữ liệu từ slide.json
    var tops = 'http://localhost:3001/top100';
    const [top, setTop] = useState([]);

    useEffect(() => {
        const fetchData
            = async () => {
                const response = await fetch(tops);
                const data = await response.json();
                setTop(data);
            };
        fetchData();
    }, []);

    return (
        <div className='Top100'>
            <div className='container-chill-title'>
                <h2 className='title-chill' style={{ color: "white" }}>TOP 100</h2>
                <button className='btn-all sixe'>
                    <div className='all'>
                        <p>TẤT CẢ</p>
                        <ArrowForwardIos sx={{ marginLeft: "5px", fontWeight: "300", fontSize: "1rem" }} /></div>
                </button>
            </div>

            <div className='container-chill-item-margin'>
                <div className='container-chill-item'>
                    {top.map((item, index) => (
                        <li key={index} className='li-chill-item'>
                            <div className='container-scale'>
                                <img className='background-chill' src={item.src} alt={item.title} />
                            </div>
                            <h4 className='description-chill'>{item.title}</h4>
                            <h5 className='description-top100'>{item.singer}</h5>
                        </li>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Top100;