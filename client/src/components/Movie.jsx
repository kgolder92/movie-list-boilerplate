import React from 'react';

const Movie = (props) => (
  <div>
    <p>
      {props.movie.title}
    </p>
    <button>Watched</button>
  </div>
)
export default Movie;