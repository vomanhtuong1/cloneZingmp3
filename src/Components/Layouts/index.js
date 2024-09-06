import Header from "./Header";
import Slide from "./SlideBar";
import { Grid } from "@mui/material";

function Layouts({ children }) {
    return (
        <Grid container spacing={0} className="container-header-slideBar">
            <Grid item xs={0} sm={1} md={1} lg={2}>
                <Slide />
            </Grid>
            <Grid item xs={12} sm={11} md={11} lg={10} className="container"
                style={{ width: '100%', overflowY: 'scroll', backgroundColor: "#170F23", height: '100vh' }}>
                <Header />
                <div className="content">
                    {children}</div>
            </Grid>

        </Grid>
    );
}
export default Layouts;