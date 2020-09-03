import React, { useState, useEffect } from 'react';
import './Results.css';
import VideoCard from './VideoCard';
import axios from './axios';
import FlipMove from 'react-flip-move';

function Results({ selectedOption }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        //run this code once when the Results component loads/mounts
        async function fetchData() {
            const response = await axios.get(selectedOption);

            console.log('Response', response);

            setMovies(response.data.results);

            return response;
        }
        fetchData();
    }, [selectedOption]);

    return (
        <div className="results">
            <FlipMove>
                {movies.map((movie) => (
                    <VideoCard key={movie.id} movie={movie} />
                ))}
            </FlipMove>
        </div>
    );
}

export default Results;
