import React from 'react';
import axios from 'axios';

import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import AddMovie from './AddMovie.jsx'

// var movies = [
//   {title: 'Mean Girls'},
//   {title: 'Hackers'},
//   {title: 'The Grey'},
//   {title: 'Sunshine'},
//   {title: 'Ex Machina'},
// ];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      filteredMovies: [], //TODO refactor to display movies if filter happens then set it to filtered if not set it to movies
      searchQuery: ''
    }
    this.addMovie = this.addMovie.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
    this.fetchMovies = this.fetchMovies.bind(this);
    this.toggleWatched = this.toggleWatched.bind(this);
  }

  componentDidMount() {
      this.fetchMovies();
    }

    fetchMovies() {
      axios.get('/movies')
      .then(({data}) => {
        console.log(data)
        this.setState({movies: data})
      })
      .catch((err) => {
        console.log('err!!!')
      })
    }

    addMovie(movie) {
      axios.post('/movies', movie)
        .then(() => this.fetchMovies())
    }

    toggleWatched(id) {
      //get id of movie that watched button was clicked on
      //update that movie(id) to have a watched state
      console.log('hit watched')
      axios.put(`/movie/${id}`)
        .then(() => this.fetchMovies())
    }

    filterMovies({ searchQuery }) {
      console.log('this state', this.state.movies);
      let filteredMovies = [];
      let moviesState = this.state.movies;
      for(let currentMovie of moviesState) {
        if(currentMovie.title.toLowerCase() === searchQuery.toLowerCase()){
          console.log('in here')
          filteredMovies.push({title: searchQuery})
          console.log(filteredMovies)
        }
        else {
          //TODO handle when searched movie isnt in list
          console.log('no movies by that title found')
        }
      }
      this.setState({
         filteredMovies
      })
    }

  render() {
    const { movies } = this.state;
    return (
      <div>
        <header><h1>Movie  List</h1></header>
        <Search filterMovies={this.filterMovies} />
        <AddMovie addMovie={this.addMovie} />
        <MovieList movies={this.state.filteredMovies.length === 0 ? movies : this.state.filteredMovies} toggleWatched={this.toggleWatched}/>
      </div>
    )
  }
};

  export default App;