import Header from "./Header";
import Slide from "./SlideBar";

function Layouts({ children }) {
    return (
        <div className="container-header-slideBar">
            <Slide />
            <div className="container" style={{ width: '100%', overflow: 'scroll' }}>
                <Header />
                <div className="content">
                    {children}</div>
            </div>

        </div>
    );
}
export default Layouts;