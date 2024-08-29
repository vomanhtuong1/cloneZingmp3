import React, { useState, useEffect } from 'react';


function Home() {
    const [slide, setSlide] = useState([]);
    var slideApi = 'http://localhost:3001/slide';

    useEffect(() => {
        const fetchData
            = async () => {
                const response = await fetch('http://localhost:3001/slide'); // Thay thế bằng địa chỉ API của bạn
                const data = await response.json();
                setSlide(data);
            };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Danh sách sản phẩm</h1>
            <ul>
                {slide.map((intro) => (
                    <li key={intro.id}>
                        <img src={intro.path} alt={intro.title} />
                        <h3>{intro.title}</h3>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;