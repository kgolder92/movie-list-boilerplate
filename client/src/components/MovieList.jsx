import React from 'react';
import ReactDOM from 'react-dom';
import Movie from './Movie.jsx'

const MovieList = (props) => (


  <ul>
    { props.movies.map((movie, idx) =>
        <Movie key={movie.title + idx} movie={movie}/>
    )}
  </ul>


)

export default MovieList;