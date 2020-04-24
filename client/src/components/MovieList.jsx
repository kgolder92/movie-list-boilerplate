import React from 'react';
import ReactDOM from 'react-dom';
import Movie from './Movie.jsx'

const MovieList = (props) => (

  <div>
    { props.movies.map((movie, idx) =>
        <Movie key={idx} movie={movie} toggleWatched={props.toggleWatched}/>
    )}
  </div>


)

export default MovieList;