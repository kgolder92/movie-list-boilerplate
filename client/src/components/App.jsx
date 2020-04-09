import React from 'react';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';

var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: []
    }
  }

  render() {
    return (
      <div>
      <Search />
      <MovieList movies={movies}/>
      </div>
    )
  }
};

  export default App;