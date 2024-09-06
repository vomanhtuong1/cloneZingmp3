import './newlyReleased.scss';
import { useEffect, useState } from 'react';
import { MoreHoriz } from '@mui/icons-material';
import { ArrowForwardIos, PlayArrow } from '@mui/icons-material';

function NewlyRealeasedHome() {
    //lấy dữ liệu từ slide.json
    var newly = 'http://localhost:3001/newlyReleased';
    const [newLy, setNewLy] = useState([]);

    useEffect(() => {
        const fetchData
            = async () => {
                const response = await fetch(newly);
                const data = await response.json();
                setNewLy(data);
            };
        fetchData();
    }, []);

    return (
        <div className="newly">
            <h2 className='title-newly' title="Mới phát hành">Mới Phát Hành</h2>
            <div className='btn-container'>
                <div className='btn-container-right'>
                    <button className='btn-all active'>TẤT CẢ</button>
                    <button className='btn-all'>VIỆT NAM</button>
                    <button className='btn-all'>QUỐC TẾ</button>
                </div>
                <button className='btn-all sixe'>
                    <div className='all'>
                        <p>TẤT CẢ</p>
                        <ArrowForwardIos sx={{ marginLeft: "5px", fontWeight: "300", fontSize: "1rem" }} /></div>
                </button>
            </div>
            <div className='container-newly'>
                <div className='grid-container-newly'>
                    {newLy.map((newSong, index) => (
                        <li key={index} className='grid-container-content'>
                            <div className='container-avatar'>
                                <img className='avatar-container' src={newSong.path} alt={newSong.title} />
                                <PlayArrow className='playarrow' />
                            </div>
                            <div className='grid-container-text'>
                                <h3 className='song-name' title={newSong.title} style={{ color: "white", fontWeight: "normal" }}>
                                    {newSong.title}
                                    <span className='premium'></span>
                                </h3>
                                <h4 className='singer-name' title={newSong.singer} style={{
                                    color: "rgb(255, 255, 255, 0.3)",
                                    fontWeight: "normal", fontSize: "14px"
                                }}>{newSong.singer}</h4>
                            </div>
                            <MoreHoriz />
                        </li>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default NewlyRealeasedHome;