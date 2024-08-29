import { Link } from 'react-router-dom';
import './SlideBar.scss'
import { LibraryMusic, PlayCircle, WifiTetheringError, Insights, Radio, Lyrics, EmojiSymbols, StarBorder, Add } from '@mui/icons-material';
import { History, FavoriteBorder, QueueMusic, Album, CloudUpload } from '@mui/icons-material';
function Slide() {
    return (
        <div className='container-all-slideBar'>
            <div className='relative-container-silebar'>
                <div style={{ position: 'relative', height: '400px' }}>
                    <div className='logo-fixed'>
                        <Link to='/'>
                            <img className='image' src='/icon/icon1.png' alt='logo zing mp3' />
                        </Link>
                    </div>
                    <div className='container-case-slideBar'>
                        <div className='backGround play'>
                            <div>
                                <Link to='/library' className='link-library' >
                                    <LibraryMusic className='icon-library' sx={{ ml: '30px', mr: '10px' }} />
                                    Thư Viện
                                </Link>
                            </div>
                            <div className='playIcon'>
                                <PlayCircle sx={{ mr: '25px', mt: '5px', color: 'rgb(255, 255, 255)' }} />
                            </div>
                        </div>
                        <div className='backGround'>
                            <div>
                                <Link to='/discover' className='link-library'>
                                    <WifiTetheringError sx={{ ml: '30px', mr: '10px' }} />
                                    Khám Phá
                                </Link>
                            </div>
                        </div>
                        <div className='backGround play'>
                            <div>
                                <Link to='/zingchart' className='link-library'>
                                    <Insights sx={{ ml: '30px', mr: '10px' }} />
                                    #Zingchart
                                </Link>
                            </div>
                            <div className='playIcon'>
                                <PlayCircle sx={{ mr: '25px', mt: '5px', color: 'rgb(255, 255, 255)' }} />
                            </div>
                        </div>
                        <div className='backGround play'>
                            <div>
                                <Link to='/radio' className='link-library'>
                                    <Radio sx={{ ml: '30px', mr: '10px' }} />
                                    Radio
                                    <img className='live' src="https://zjs.zmdcdn.me/zmp3-desktop/dev/147506/static/media/live-tag.e25dd240.svg" alt=""></img>
                                </Link>
                            </div>
                            <div className='playIcon'>
                                <PlayCircle sx={{ mr: '25px', mt: '5px', color: 'rgb(255, 255, 255)' }} />
                            </div>
                        </div>
                        <div className='line'></div>
                        <div className='space'></div>
                    </div>


                </div>
                <div className='container-case-scroll'>
                    <div className='container-case-scroll-1 is-mark'>
                        <div className='container-three-case-top'>
                            <div className='backGround play'>
                                <div>
                                    <Link to='/bxh' className='link-library'>
                                        <Lyrics sx={{ ml: '30px', mr: '10px' }} />
                                        BXH Nhạc Mới
                                    </Link>
                                </div>
                                <div className='playIcon'>
                                    <PlayCircle sx={{ mr: '25px', mt: '5px', color: 'rgb(255, 255, 255)' }} />
                                </div>
                            </div>
                            <div className='backGround'>
                                <div>
                                    <Link to='/topicandgenre' className='link-library'>
                                        <EmojiSymbols sx={{ ml: '30px', mr: '10px' }} />
                                        Chủ Đề & Thể Loại
                                    </Link>
                                </div>
                            </div>
                            <div className='backGround'>
                                <div>
                                    <Link to='/top100' className='link-library'>
                                        <StarBorder sx={{ ml: '30px', mr: '10px' }} />
                                        Top 100
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/*banner*/}
                        <div className="vip-banner-sidebar">
                            <div className="text">
                                Nghe nhạc không quảng cáo cùng kho nhạc PREMIUM
                            </div>
                            <Link className="zm-btn" href="" >
                                Nâng cấp tài khoản
                            </Link>
                        </div>
                        {/*up load*/}
                        <div className='UpLoad'>
                            <div className='backGround'>
                                <div>
                                    <Link to='' className='link-library'>
                                        <History sx={{
                                            ml: '30px', mr: '10px',
                                            background: '#7B2FFF', color: 'white',
                                            borderRadius: '10px', padding: '0 2px'
                                        }} />
                                        Nghe Gần Đây
                                    </Link>
                                </div>
                            </div>

                            <div className='backGround play'>
                                <div>
                                    <Link to='' className='link-library'>
                                        <FavoriteBorder sx={{
                                            ml: '30px', mr: '10px',
                                            background: '#0BC5FF', color: 'white',
                                            borderRadius: '10px', padding: '0 2px'
                                        }} />
                                        Bài Hát Yêu Thích
                                    </Link>
                                </div>
                                <div className='playIcon'>
                                    <PlayCircle sx={{
                                        mr: '20px', mt: '5px',
                                        color: 'rgb(255, 255, 255)'
                                    }} />
                                </div>
                            </div>

                            <div className='backGround'>
                                <div>
                                    <Link to='' className='link-library'>
                                        <QueueMusic sx={{
                                            ml: '30px', mr: '10px',
                                            background: '#FA712E', color: 'white',
                                            borderRadius: '10px', padding: '0 2px'
                                        }} />
                                        Playlist
                                    </Link>
                                </div>
                            </div>

                            <div className='backGround'>
                                <div>
                                    <Link to='' className='link-library'>
                                        <Album sx={{
                                            ml: '30px', mr: '10px',
                                            background: '#FF4DAF', color: 'white',
                                            borderRadius: '10px', padding: '0 2px'
                                        }} />
                                        Album
                                    </Link>
                                </div>
                            </div>

                            <div className='backGround'>
                                <div>
                                    <Link to='' className='link-library'>
                                        <CloudUpload sx={{
                                            ml: '30px', mr: '10px',
                                            background: '#D04848', color: 'white',
                                            borderRadius: '10px', padding: '0 2px'
                                        }} />
                                        Đã Tải lên
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='backGround fix'>
                <div className='line-two'>

                </div>
                <div>
                    <Link to='' className='link-library'>
                        <Add sx={{ ml: '30px', mr: '10px' }} />
                        Tạo PlayList Mới
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Slide;