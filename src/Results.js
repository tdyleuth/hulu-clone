import React, { useState, useEffect } from 'react';
import './Results.css';
import VideoCard from './VideoCard';
import axios from './axios';
import requests from './requests';

function Results({ selectedOption }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        //run this code once when the Results component loads/mounts
        async function fetchData() {
            const response = await axios.get(selectedOption);

            setMovies(response.data.results);
            return response;
        }
        fetchData();
    }, [selectedOption]);

    return (
        <div className="results">
            {movies.map((movie) => (
                <VideoCard movie={movie} />
            ))}
        </div>
    );
}

export default Results;
