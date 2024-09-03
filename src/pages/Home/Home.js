import SlideShow from './Container/Carousel/slideShow';
import NewlyRealeasedHome from './Container/newly/newlyReleased';
import Chill from './Container/Chill/Chill.js';


function Home() {
    return (
        <>
            <SlideShow />
            <NewlyRealeasedHome />
            <Chill />
        </>
    );
}

export default Home;