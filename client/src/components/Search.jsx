import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: ''
    }
    this.updateSearch = this.updateSearch.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.intializeState = this.intializeState.bind(this);
  }

   updateSearch({ target }) { //onchange typing
    //  this.setState ({
    //    searchQuery: e.target.value
    //  })

    const {name, value} = target;
    this.setState({[name]: value});
   }

   handleSearch(e) {
     e.preventDefault();
     this.props.filterMovies(this.state)
     this.intializeState();
   }

   intializeState() {
     this.state = {
       searchQuery: ''
     }
   }

   render() {
     return(
      <div>
        <form>
          <input placeholder="search" name="searchQuery" value={ this.state.searchQuery } onChange={this.updateSearch} />
          <button onClick={this.handleSearch}>Search</button>
        </form>

      </div>
     )
   }
}

export default Search;