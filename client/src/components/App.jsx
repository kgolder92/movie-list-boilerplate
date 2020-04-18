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
      movies: [],
      filteredMovies: [], //TODO refactor to display movies if filter happens then set it to filtered if not set it to movies
      searchQuery: ''
    }
    this.filterMovies = this.filterMovies.bind(this);
  }

    filterMovies({ searchQuery }) {
      let filteredMovies = [];
      let moviesState = this.state.movies;
      for(let currentMovie of movies) {
        if(currentMovie.title.toLowerCase() === searchQuery.toLowerCase()){
          console.log('in here')
          filteredMovies.push({title: searchQuery})
          console.log(filteredMovies)
        }
        else {
          console.log('no movies by that title found')
        }
      }
      this.setState({
         filteredMovies
      })
    }

  render() {
    return (
      <div>
        <header><h1>Movie  List</h1></header>
      <Search filterMovies={this.filterMovies} />
      <MovieList movies={this.state.filteredMovies.length === 0 ? movies : this.state.filteredMovies}/>
      </div>
    )
  }
};

  export default App;