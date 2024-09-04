import SlideShow from './Container/Carousel/slideShow';
import NewlyRealeasedHome from './Container/newly/newlyReleased';
import Chill from './Container/Chill/Chill.js';
import BXH from './Container/BXH/BXH.js';



function Home() {
    return (
        <>
            <SlideShow />
            <NewlyRealeasedHome />
            <Chill />
            <BXH />
        </>
    );
}

export default Home;