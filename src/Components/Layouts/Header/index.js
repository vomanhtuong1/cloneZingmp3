import { ArrowBack, ArrowForward, Search, InstallDesktop, Settings } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { AppBar } from "@mui/material";
import './Header.scss'

function Header() {
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
                        <div className="search__container" >
                            <button className="search-btn" >
                                <Search sx={{ color: 'rgba(240, 248, 255, 0.674)', fontSize: '28px', marginTop: '5px' }} />
                            </button>
                            <div className="input-wrapper">
                                <input type="text" className="input-placeholder" placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..." />
                            </div>
                        </div>
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