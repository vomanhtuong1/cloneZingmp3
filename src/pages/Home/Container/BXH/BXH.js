import './BXH.scss';
import { useState, useEffect } from 'react';
import { ArrowForwardIos, ArrowBackIos, PlayCircleOutline } from '@mui/icons-material';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function BXH() {
    //lấy dữ liệu từ slide.json
    var BXHApi = 'http://localhost:3001/BXH';
    const [bXH, setBXH] = useState([]);

    useEffect(() => {
        const fetchData
            = async () => {
                const response = await fetch(BXHApi);
                const data = await response.json();
                setBXH(data);
            };
        fetchData();
    }, []);

    //điều chỉnh slide show khi kích thước trình duyệt thay đổi
    const [slidesToShowBXH, setSlidesToShowBXH] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1350) {
                setSlidesToShowBXH(2);
            } else {
                setSlidesToShowBXH(3);
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize(); // Kiểm tra ngay khi component được mount

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    //thiết lập styles cho slider
    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: slidesToShowBXH,
        slidesToScroll: slidesToShowBXH,
        autoplay: true,
        autoplaySpeed: 3000,
        adaptiveHeight: true
    };

    return (
        <div className='BXH' style={{ marginTop: "25px" }}>
            <div className='BXH-title'>
                <h2 className='BXH-title-content'>BXH</h2>
                <button className='btn-all sixe'>
                    <div className='all'>
                        <p>TẤT CẢ</p>
                        <ArrowForwardIos sx={{ marginLeft: "5px", fontWeight: "300", fontSize: "1rem" }} /></div>
                </button>
            </div>

            <div className='container-bxh-margin'>
                <div className='container-bxh'>
                    {/*<div className='container-btn'>
                        <div className='btn-slide prev'>
                            <ArrowBackIos sx={{ color: 'white' }} />
                        </div>
                        <div className='btn-slide next'>
                            <ArrowForwardIos sx={{ color: 'white' }} />
                        </div>
                    </div>*/}
                    <Slider {...settings}>
                        {bXH.map((itemBXH, index) => (
                            <li key={index} className='li-bxh-container'>
                                <div className='container-scale'>
                                    <img className='avatar-bxh' src={itemBXH.src} alt={itemBXH.title} />
                                    <div className='container-list-icon'>
                                        <PlayCircleOutline sx={{
                                            color: 'white',
                                            fontSize: '50px'
                                        }} />
                                    </div>
                                </div>
                                <div className='container-content-bxh'>
                                    <div className='container-title'>
                                        <h4 className='bxh-name-song' title={itemBXH.title}>{itemBXH.title}</h4>
                                        <h5 className='bxh-name-singer' title={itemBXH.singer}>{itemBXH.singer}</h5>
                                    </div>
                                    <div className='datetime'>
                                        <span className='stt-bxh'>#{index + 1}</span>
                                        <h4 className='datetime-song'>{itemBXH.datetime}</h4>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default BXH;