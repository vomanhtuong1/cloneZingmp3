import './albumHot.scss';
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function AlbumHot() {
    //lấy dữ liệu từ slide.json
    var albumList = 'http://localhost:3001/ablumhot';
    const [album, setAlbum] = useState([]);

    useEffect(() => {
        const fetchData
            = async () => {
                const response = await fetch(albumList);
                const data = await response.json();
                setAlbum(data);
            };
        fetchData();
    }, []);

    //thiết lập styles cho slider
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: true,
        autoplaySpeed: 2000,
        adaptiveHeight: true
    };
    return (
        <div className='album-hot'>
            <h2 className='album-hot-title'>ALBUM HOT</h2>
            <Slider {...settings}>
                {album.map((albumItem, index) => (
                    <li key={index} className='li-album-hot'>
                        <div className='container-avatar-album'>
                            <img className='avatar-album' src={albumItem.path} alt={albumItem.title} />
                        </div>
                        <h4 title={albumItem.title} className='album-name-song'>{albumItem.title}</h4>
                        <h5 title={albumItem.singer} className='album-name-singer'>{albumItem.singer}</h5>
                    </li>
                ))}
            </Slider>
        </div>
    )
}

export default AlbumHot;