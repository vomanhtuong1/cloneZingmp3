import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.scss";
import "../BXH/BXH.scss";


function SlideShow() {
    //lấy dữ liệu từ slide.json
    var slideApi = 'http://localhost:3001/slide';
    const [slide, setSlide] = useState([]);

    useEffect(() => {
        const fetchData
            = async () => {
                const response = await fetch(slideApi);
                const data = await response.json();
                setSlide(data);
            };
        fetchData();
    }, []);

    //điều chỉnh slide show khi kích thước trình duyệt thay đổi
    const [slidesToShow, setSlidesToShow] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1500) {
                setSlidesToShow(2);
            } else {
                setSlidesToShow(3);
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
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        adaptiveHeight: true,

    };

    return (
        <div className='slide-item-container'>
            <div className='slide-items'>

                <div className='item-container'>{/*
                    <div className='container-btn'>
                        <div className='btn-slide prev'>
                            <ArrowBackIos sx={{ color: 'white' }} />
                        </div>
                        <div className='btn-slide next next-carousel'>
                            <ArrowForwardIos sx={{ color: 'white' }} />
                        </div>
                    </div>*/}
                    <Slider {...settings} >
                        {slide.map((intro, index) => (
                            <div key={index} className='slide-item'>
                                <a title={intro.title} href="/">
                                    <figure className="image is-48x48">
                                        <img className='img' src={intro.path} alt={intro.title} />
                                    </figure>
                                </a>
                            </div >))}
                    </Slider>
                </div>

            </div>
        </div>
    )

}

export default SlideShow;