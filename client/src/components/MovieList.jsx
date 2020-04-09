import React from 'react';
import ReactDOM from 'react-dom';
import Movie from './Movie.jsx'

const MovieList = (props) => (
<table>
  <tr><th>Movie list</th></tr>
  <tbody>
    { props.movies.map((movie, idx) =>
        <Movie key={movie.title + idx} movie={movie}/>
    )}
   </tbody>
</table>
)

export default MovieList;