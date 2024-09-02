import './newlyReleased.scss'
import { ArrowForwardIos } from '@mui/icons-material';

function NewlyRealeasedHome() {

    return (
        <div className="newly">
            <h2 className='title-newly' title="Mới phát hành">Mới Phát Hành</h2>
            <div className='btn-container'>
                <div className='btn-container-right'>
                    <button className='btn-all active'>TẤT CẢ</button>
                    <button className='btn-all'>VIỆT NAM</button>
                    <button className='btn-all'>QUỐC TẾ</button>
                </div>
                <button className='btn-all sixe'>
                    <div className='all'>
                        <p>TẤT CẢ</p>
                        <ArrowForwardIos sx={{ marginLeft: "5px", fontWeight: "300", fontSize: "1rem" }} /></div>
                </button>
            </div>
            <div className='container-newly'>

            </div>
        </div>
    );
}

export default NewlyRealeasedHome;