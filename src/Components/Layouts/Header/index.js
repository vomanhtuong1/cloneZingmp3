import { TrendingUp, ArrowBack, ArrowForward, Search, InstallDesktop, Settings } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { AppBar } from "@mui/material";
import React, { useState, useEffect } from "react";
import './Header.scss'

function Header() {

    const [songs, setSongs] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [isFocused, setIsFocused] = useState(false);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const handleBlurs = () => {
        setShowSuggestions(false);
    };
    //lấy dữ liệu từ slide.json
    var listmusic = 'http://localhost:3001/newlyReleased';

    useEffect(() => {
        const fetchData
            = async () => {
                const response = await fetch(listmusic);
                const data = await response.json();
                setSongs(data);
            };
        fetchData();
    }, []);


    const handleInputChange = (event) => {
        const query = event.target.value;
        setSearchQuery(query);
        if (query) {
            // Lọc danh sách gợi ý
            const filteredSongs = songs.filter(song =>
                song.title.toLowerCase().includes(query.toLowerCase())
            );
            setSuggestions(filteredSongs);
        } else {
            // Hiển thị toàn bộ gợi ý khi chưa nhập gì
            setSuggestions(songs);
        }
        setShowSuggestions(true);
    };

    return (
        <header className="header-container-all">
            <div className="level">
                <div className="level-left">
                    <button className="arrow-back" >
                        <ArrowBack sx={{ color: 'rgba(240, 248, 255, 0.674)', }} />
                    </button>
                    <button className="arrow-forward" >
                        <ArrowForward sx={{ color: 'rgba(240, 248, 255, 0.674)' }} />
                    </button>
                    <form className="search">
                        <div className="search__container"
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            style={{
                                backgroundColor: isFocused ? '#34224F' : 'hsla(0, 0%, 100%, 0.1)',
                                borderRadius: isFocused ? '20px 20px 0 0' : '20px'
                            }} >
                            <button className="search-btn" >
                                <Search sx={{ color: 'rgba(240, 248, 255, 0.674)', fontSize: '28px', marginTop: '5px' }} />
                            </button>
                            <div className="input-wrapper">
                                <input type="text"
                                    onBlur={handleBlurs}
                                    onFocus={() => setShowSuggestions(true)}
                                    value={searchQuery}
                                    onChange={handleInputChange}
                                    className="input-placeholder"
                                    placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..." />

                            </div>

                        </div>
                        <li onFocus={handleFocus}
                            onBlur={handleBlur}
                            style={{
                                display: isFocused ? 'block' : 'none'
                            }} className="li-item">Đề xuất cho bạn</li>

                        {//suggestions.length>0
                            showSuggestions && (
                                <ul className="list-suggest">
                                    {suggestions.map(song => (
                                        <li className="list-item-suggest" key={song.id}>
                                            <TrendingUp sx={{ color: 'rgba(255,255,255,0.3)', margin: '0 5px 0 0' }} />
                                            {song.title} - {song.singer}</li>
                                    ))}
                                </ul>
                            )}
                    </form>
                </div>
                <div className="level-right">
                    <Link className="header-upgrade-vip-button"
                        href="#"
                        target="_blank">Nâng cấp tài khoản
                    </Link>
                    <div className="download-desktop-app">
                        <Link className="download-btn" target="_blank"
                            href="#">
                            <div className="dowload-content">
                                <InstallDesktop sx={{ marginRight: '5px' }} />Tải bản Windows
                            </div>
                        </Link>
                        {/*<div className="tooltip-download-btn">
                            Zing MP3 đã có ứng dụng cho máy tính, tải ngay cho trải nghiệm tuyệt vời nhất.
                        </div>*/}
                    </div>
                    <div className="setting-item">
                        <button className="btn-setting" tabIndex="0">
                            <Settings sx={{ marginTop: '4px', color: 'rgba(240, 248, 255, 0.674)' }} />
                        </button>
                    </div>
                    <div className="user-setting">
                        <div className="avatar-frame" >
                            <button className="btn-avatar" tabIndex="0">
                                <img className="avatar" src="https://s120-ava-talk-zmp3.zmdcdn.me/3/d/9/0/1/120/74b19b1223d8ac15e54675d0c3334a9b.jpg" alt="Avatar" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </header >
    )
}

export default Header;