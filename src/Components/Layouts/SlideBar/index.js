import { Link } from 'react-router-dom';
import { useState } from 'react';
import './SlideBar.scss'
import { LibraryMusic, PlayCircle, WifiTetheringError, Insights, Radio, Lyrics, EmojiSymbols, StarBorder, Add } from '@mui/icons-material';
import { History, FavoriteBorder, QueueMusic, Album, CloudUpload, ArrowForwardIos } from '@mui/icons-material';
import { Box } from '@mui/material';
function Slide() {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleClick = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className='container-all-slideBar'>
            <div className='relative-container-silebar'>
                <div style={{ position: 'relative', height: '400px' }}>
                    <Box sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' } }} className='logo-fixed'>
                        <Link to='/'>
                            <img className='image' src='/icon/icon1.png' alt='logo zing mp3' />
                        </Link>
                    </Box>
                    <Box sx={{ display: { xs: 'block', sm: 'block', md: 'block', lg: 'none' } }} className='logo-fixed'>
                        <Link to='/'>
                            <img className='image icon2' src='/icon/icon2.png' alt='logo zing mp3' />
                        </Link>
                    </Box>
                    <div className='container-case-slideBar'>
                        <div className='backGround play'>
                            <div>
                                <Link to='/library' className='link-library' >
                                    <LibraryMusic className='icon-library' sx={{ ml: '30px', mr: '10px' }} />
                                    <Box sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' } }}>Thư Viện</Box>
                                </Link>
                            </div>
                            <div className='playIcon'>
                                <PlayCircle sx={{ mr: '25px', mt: '5px', color: 'rgb(255, 255, 255)' }} />
                            </div>
                        </div>
                        <div className='backGround'>
                            <div>
                                <Link to='/' className='link-library'>
                                    <WifiTetheringError sx={{ ml: '30px', mr: '10px' }} />
                                    <Box sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' } }}>Khám Phá</Box>
                                </Link>
                            </div>
                        </div>
                        <div className='backGround play'>
                            <div>
                                <Link to='/zingchart' className='link-library'>
                                    <Insights sx={{ ml: '30px', mr: '10px' }} />
                                    <Box sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' } }}>#Zingchart</Box>
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
                                    <Box sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' } }}>
                                        Radio
                                        <img className='live' src="https://zjs.zmdcdn.me/zmp3-desktop/dev/147506/static/media/live-tag.e25dd240.svg" alt=""></img>
                                    </Box>
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
                                        <Box sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' } }}>BXH Nhạc Mới</Box>
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
                                        <Box sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' } }}>Chủ Đề & Thể Loại</Box>
                                    </Link>
                                </div>
                            </div>
                            <div className='backGround'>
                                <div>
                                    <Link to='/top100' className='link-library'>
                                        <StarBorder sx={{ ml: '30px', mr: '10px' }} />
                                        <Box sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' } }}>Top 100</Box>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/*banner*/}
                        <Box sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' } }} className="vip-banner-sidebar">
                            <div className="text">
                                Nghe nhạc không quảng cáo cùng kho nhạc PREMIUM
                            </div>
                            <Link className="zm-btn" href="" >
                                Nâng cấp tài khoản
                            </Link>
                        </Box>
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
                                        <Box sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' } }}>Nghe Gần Đây</Box>
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
                                        <Box sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' } }}>Bài Hát Yêu Thích</Box>
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
                                        <Box sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' } }}>Playlist</Box>
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
                                        <Box sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' } }}>Album</Box>
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
                                        <Box sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' } }}>Đã Tải lên</Box>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Box sx={{ display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'block' } }} className='backGround fix'>
                <Box sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' } }}>
                    <div className='line-two'>

                    </div>
                    <div>
                        <Link to='' className='link-library'>
                            <Add sx={{ ml: '30px', mr: '10px' }} />
                            Tạo PlayList Mới
                        </Link>
                    </div>
                </Box>
                <Box onClick={handleClick} sx={{
                    width: '45px', height: '45px', borderRadius: '50%', backgroundColor: 'rgb(255, 255, 255, 0.3)',
                    display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'none' }, justifyContent: 'center', alignItems: 'center'
                }}>
                    <ArrowForwardIos sx={{ color: 'white' }} />
                </Box>
            </Box>
        </div>
    );
}

export default Slide;