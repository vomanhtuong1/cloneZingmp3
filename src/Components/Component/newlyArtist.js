

function NewlyArtist() {

    return (
        <div className="newly-Artist" style={{ marginRight: "30px", width: "40%", maxWidth: "600px" }}>
            <div className="title-newlyArtist">
                <h3 style={{ color: "white", fontSize: "20px" }}>Mới Phát Hành</h3>
            </div>
            <div style={{
                display: "flex", alignItems: "center", margin: "20px 0", backgroundColor: "rgb(49, 43, 59)",
                padding: "20px", borderRadius: "20px"
            }} className="list-newlyArtist">
                <img style={{
                    width: "150px", height: "150px", borderRadius: "10px", margin: "0 20px 0 0"
                }} src="http://localhost:3000/assets/images/slideShow/Artist/ChauKhaiPhong.png" alt="Châu Khải Phong" />
                <div>
                    <h4 style={{ color: "rgb(255, 255, 255, 0.3)", fontSize: "14px", fontWeight: "200" }}>Single</h4>
                    <h3 style={{ color: "white", fontSize: "17px" }}>Là Tại Anh Sai</h3>
                    <h4 style={{ color: "rgb(255, 255, 255, 0.3)", fontSize: "14px", fontWeight: "200" }}>Châu Khải Phong</h4>
                    <h4 style={{ color: "rgb(255, 255, 255, 0.3)", fontSize: "14px", fontWeight: "200" }}>Time</h4>
                </div>
            </div>
        </div>
    )
}

export default NewlyArtist;