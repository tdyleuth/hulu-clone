import React from "react";
import "./VideoCard.css";

function VideoCard({ movie }) {
    return (
        <div className="videoCard">
            <img
                src="https://i.ytimg.com/vi/xRXQGtylTmA/maxresdefault.jpg"
                alt=""
            />
            <p>THis is film about stuff</p>
            <h2>Movie title</h2>
            <p>Likes</p>
        </div>
    );
}

export default VideoCard;
