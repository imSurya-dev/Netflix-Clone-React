import React, { useState, useEffect } from 'react';
import axios from './axios';
import "./Row.scss";

const base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);

    //snippet code to run based on specific conditions
    useEffect(() => {
        // empty brackets means run the function once and dont run it again
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    return (
        <div className="row">
            <h2 className="row__title">
                {title}
            </h2>
            <div className="row__posters">
                {movies.map((movie) => {
                    return <img key={movie.id} className={`${isLargeRow && 'row__posterLarge'} row__poster`} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                })}
            </div>
        </div>
    );
}

export default Row;