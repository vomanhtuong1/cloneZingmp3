import './MusicPlayer.scss';
import { useState, useEffect } from 'react';
import {
    FavoriteBorder, MoreHoriz, Shuffle, Replay, SkipNext, SkipPrevious, PlayCircleOutline,
    SmartDisplay, Mic, BrandingWatermark, VolumeUp, QueueMusic, PauseCircleOutline
} from '@mui/icons-material';

function MusicPlayer() {
    //lấy dữ liệu từ slide.json
    var musicplayer = 'http://localhost:3001/newlyReleased';
    const [mplayer, setMPlayer] = useState([]);

    useEffect(() => {
        const fetchData
            = async () => {
                const response = await fetch(musicplayer);
                const data = await response.json();
                setMPlayer(data);
            };
        fetchData();
    }, []);

    return (
        <div className="music-player">
            <div className='container-infor'>
                <img className='musicplayer-avatar' src='assets/images/newlyReleased/new1.png' alt='bai 1' />
                <div className='container-information'>
                    <h4>Name Song</h4>
                    <h5>Name Singer</h5>
                </div>
                <FavoriteBorder sx={{ color: 'white' }} />
                <MoreHoriz sx={{ color: 'white' }} />
            </div>
            <div className='container-item-midle'>
                <div className='container-list-icon-musicPlayer'>
                    <Shuffle sx={{ color: 'white', fontSize: '40px' }} />
                    <SkipPrevious sx={{ color: 'white', fontSize: '40px' }} />
                    <PlayCircleOutline sx={{ color: 'white', fontSize: '50px' }} />
                    <PauseCircleOutline sx={{ color: 'white', fontSize: '50px' }} />
                    <SkipNext sx={{ color: 'white', fontSize: '40px' }} />
                    <Replay sx={{ color: 'white', fontSize: '40px' }} />
                </div>
                <div className='container-input-range'>
                    <input className='myrange' type="range" min="1" max="100" />
                </div>
            </div>
            <div className='container-list-icon-volume'>
                <SmartDisplay sx={{ color: 'white' }} />
                <Mic sx={{ color: 'white', marginLeft: '15px' }} />
                <BrandingWatermark sx={{ color: 'white', marginLeft: '15px' }} />
                <VolumeUp sx={{ color: 'white', marginLeft: '15px' }} />
                <input className='my-range' type="range" min="1" max="100" />
                <div className='line-y'></div>
                <QueueMusic sx={{ color: 'white' }} />
            </div>
        </div>
    )
}

export default MusicPlayer