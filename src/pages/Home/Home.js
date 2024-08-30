import React, { useState, useEffect } from 'react';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import './Home-slideShow.scss';

function Home() {
    const [slide, setSlide] = useState([]);
    var slideApi = 'http://localhost:3001/slide';

    useEffect(() => {
        const fetchData
            = async () => {
                const response = await fetch(slideApi); // Thay thế bằng địa chỉ API của bạn
                const data = await response.json();
                setSlide(data);
            };

        fetchData();
    }, []);

    return (
        <div className='container-all' style={{ background: "blue" }}>
            <div className='slide'>
                <div className='slide-item-container'>
                    <div className='slide-items'>
                        <div className="slide-prev">
                            <button className="btn-prev" tabIndex="0">
                                <ArrowBackIos />
                            </button>
                        </div>
                        {slide.map((intro, index) => (
                            <div key={index} className='slide-item'>
                                <div className="gallery-item gallery-item-first">
                                    <div className="zm-card">
                                        <a title={intro.title} href="/">
                                            <div className="zm-card-image">
                                                <figure className="image is-48x48">
                                                    <img src={intro.path} alt={intro.title} />
                                                </figure>
                                            </div>
                                        </a>
                                    </div>
                                </div >
                            </div >))}
                        <div className="slide-next">
                            <button className="btn-next" tabIndex="0">
                                <ArrowForwardIos />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Home;