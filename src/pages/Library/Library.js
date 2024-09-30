import { HourglassEmpty } from "@mui/icons-material";
import { Button } from "@mui/material";
import { color } from "chart.js/helpers";
function Library() {
    return (
        <div>
            <h1 style={{ color: 'white' }}>Library</h1>
            <div style={{
                display: 'flex', height: '100vh',
                flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
            }} className="empty">
                <HourglassEmpty sx={{
                    fontSize: '50px',
                    color: 'rgba(255, 255, 255, 0.3)', marginBottom: '10px'
                }} />
                <h3 style={{ color: 'rgba(255,255,255,0.3)' }}>
                    Rẩt tiếc thư viện của bạn chưa có một bài hát nào cả!</h3>
                <Button variant="outlined" sx={{
                    color: 'white',
                    border: '1px solid white', borderRadius: '50px', padding: '8px 30px', marginTop: '10px'
                }}>Thêm Ngay</Button>

            </div>
        </div>
    )
}

export default Library;