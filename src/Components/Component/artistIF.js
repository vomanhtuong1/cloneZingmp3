import React from "react";
import { Link } from "react-router-dom";

function ArtistIF(props) {
    return (
        <div>
            <Link style={{ color: "rgb(255, 255, 255, 0.3)" }} to={`/infomation/${props.id}`}>{props.name}</Link>
        </div>
    )
}

export default ArtistIF;