import { ArrowForwardIos } from "@mui/icons-material";

function FeatureSong() {

    return (
        <div style={{ width: "55%", maxWidth: "650px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <h3 style={{ color: "white", fontSize: "20px" }}>Bài Hát Nổi Bật</h3>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <h3 style={{ color: "rgb(255, 255, 255, 0.3)", fontSize: "16px", fontWeight: "500" }}>TẤT CẢ</h3>
                    <ArrowForwardIos sx={{ color: "rgb(255, 255, 255, 0.3)", fontSize: "20px" }} />
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default FeatureSong;