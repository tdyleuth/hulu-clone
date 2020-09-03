import React from 'react';
import './VideoCard.css';
import TextTruncate from 'react-text-truncate';
import { ThumbUpSharp } from '@material-ui/icons';

const BASE_URL = 'https://image.tmdb.org/t/p/original';

function VideoCard({ movie }) {
    return (
        <div className="videoCard">
            <img
                src={`${BASE_URL}${movie.backdrop_path || movie.poster_path}`}
                alt="movie poster"
            />
            <TextTruncate
                line={2}
                element="p"
                truncateText="..."
                text={movie.overview}
            />

            <h2>{movie.title}</h2>
            <p className="videoCard-stats">
                {movie.media_type && `${movie.media_type} •`}
                {`${movie.release_date || movie.first_air_date} • ${' '}`}
                <ThumbUpSharp /> {`${' '}+${movie.vote_count}`}
            </p>
        </div>
    );
}

export default VideoCard;
