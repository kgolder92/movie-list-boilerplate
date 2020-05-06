import React from 'react';

const Movie = (props) => (
  <div>
    <p>
      {props.movie.title}
    </p>
    <button onClick={() => props.toggleWatched(props.movie.id, props.movie.watched)}>Watched</button>
  </div>
)
export default Movie;