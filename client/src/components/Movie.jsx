import React from 'react';
import WatchedBtn from './WatchedBtn.jsx';


const Movie = (props) => (
  <p>
    {props.movie.title} <WatchedBtn />
  </p>
)
export default Movie;