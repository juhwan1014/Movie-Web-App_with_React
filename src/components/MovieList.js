import React from 'react';
import MovieCompo from './MovieCompo'
import { Link } from "react-router-dom";

const MovieList = (props) => {

    return (
        
        <section className="movies-section py-4 ">
        <div className="container">

           { /*<header className="section-heading">
                <a href="index.html" className="btn btn-lg btn-outline-success mt-3 float-right">See all</a>
                <h1 className="display-4">Popular Movies</h1>
    </header>  */}
            <div className = "row my-4 search-list">
            {
                   props.movies.map((movie, i) => {
                    return (
                        <MovieCompo key={i} image={movie.poster_path}/>
                    )
                   })
               }
            </div>
        </div>
        </section>
    );



}

export default MovieList;