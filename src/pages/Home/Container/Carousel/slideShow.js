import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.scss";


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

    //thiết lập styles cho slider
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        adaptiveHeight: true
    };
    return (
        <div className='slide-item-container'>
            <div className='slide-items'>

                <div className='item-container'>
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