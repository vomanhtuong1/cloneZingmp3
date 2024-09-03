import Header from "./Header";
import Slide from "./SlideBar";

function Layouts({ children }) {
    return (
        <div className="container-header-slideBar">
            <Slide />
            <div className="container" style={{ width: '100%', overflowY: 'scroll', backgroundColor: "#170F23" }}>
                <Header />
                <div className="content">
                    {children}</div>
            </div>

        </div>
    );
}
export default Layouts;