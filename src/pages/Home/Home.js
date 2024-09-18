import SlideShow from './Container/Carousel/slideShow';
import NewlyRealeasedHome from './Container/newly/newlyReleased';
import Chill from './Container/Chill/Chill.js';
import BXH from './Container/BXH/BXH.js';
import ZingChart from './Container/zingchart/zingchart.js';
import Top100 from './Container/Top100/Top100.js';
import AlbumHot from './Container/albumHot/albumhot.js';
import Radio from './Container/Radio/radio.js';
import SuggestionForYou from './Container/suggestionForYou/suggestionForYou.js';
import HeardRecently from './Container/heardRecently/heardRecently.js';
import { useEffect, useState } from 'react';

import './Home.scss'



function Home() {

    //lấy dữ liệu từ slide.json
    var partnerList = 'http://localhost:3001/doitac';
    const [partner, setPartner] = useState([]);

    useEffect(() => {
        const fetchData
            = async () => {
                const response = await fetch(partnerList);
                const data = await response.json();
                setPartner(data);
            };
        fetchData();
    }, []);

    return (
        <>
            <SlideShow />
            <HeardRecently />
            <SuggestionForYou />
            <NewlyRealeasedHome />
            <Chill />
            <BXH />
            <ZingChart />
            <div className='container-list'>
                <div className='container-item'>
                    <img className='zing-chart-bxh VN' src='assets/images/slideShow/category/cate1.png' alt='' />
                </div>
                <div className='container-item'>
                    <img className='zing-chart-bxh usuk' src='assets/images/slideShow/category/cate2.png' alt='' />
                </div>
                <div className='container-item'>
                    <img className='zing-chart-bxh kpop' src='assets/images/slideShow/category/cate3.png' alt='' />
                </div>
            </div>
            <Top100 />
            <AlbumHot />
            <Radio />
            <div className='partner'>
                <h3 className='partner-title'>ĐỐI TÁC ÂM NHẠC</h3>
                <div className='container-logo-partner'>
                    {partner.map((itemPartner, index) => (
                        <img key={index} className='avatar-partner' src={itemPartner.src} alt={itemPartner.title} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Home;