import './Chill.scss';
import { ArrowForwardIos, FavoriteBorder, PlayCircleOutline, MoreHoriz } from '@mui/icons-material';
import { useState, useEffect } from 'react';
import { IconButton } from '@mui/material';

function Chill() {
    //lấy dữ liệu từ slide.json
    var Chill = 'http://localhost:3001/chill';
    const [chill, setChill] = useState([]);

    useEffect(() => {
        const fetchData
            = async () => {
                const response = await fetch(Chill);
                const data = await response.json();
                setChill(data);
            };
        fetchData();
    }, []);

    return (
        <div className='Chill' style={{ margin: "20px 0" }}>
            <div className='container-chill-title'>
                <h2 className='title-chill' style={{ color: "white" }}>Chill</h2>
                <button className='btn-all sixe'>
                    <div className='all'>
                        <p>TẤT CẢ</p>
                        <ArrowForwardIos sx={{ marginLeft: "5px", fontWeight: "300", fontSize: "1rem" }} /></div>
                </button>
            </div>

            <div className='container-chill-item-margin'>
                <div className='container-chill-item'>
                    {chill.map((item, index) => (
                        <li key={index} className='li-chill-item'>
                            <div className='container-scale'>
                                <img className='background-chill' src={item.path} alt={item.title} />
                                <div className='container-list-icon'>
                                    <IconButton title='Thêm vào thư viện' sx={{ padding: '0' }}>
                                        <FavoriteBorder sx={{ color: 'white' }} />
                                    </IconButton>
                                    <IconButton title='' sx={{ padding: '0' }} >
                                        <PlayCircleOutline sx={{ color: 'white', margin: '0 10px', fontSize: '50px' }} />
                                    </IconButton>
                                    <IconButton title='Khác' sx={{ padding: '0' }}>
                                        <MoreHoriz sx={{ color: 'white' }} />
                                    </IconButton>
                                </div>
                            </div>
                            <h4 className='description-chill'>{item.title}</h4>
                        </li>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Chill;