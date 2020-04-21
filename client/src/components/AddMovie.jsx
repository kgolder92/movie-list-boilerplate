
import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const {name, value} = target;
    this.setState({[name]: value}) //{movie: inputted movie}
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addMovie(this.state);
    this.intializeState();
  }

  intializeState() {
    this.state = {
      title: ''
    }
  }

  render () {
    const { title } = this.state;
    const addMovie = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input placeholder="add movie" name="title" value={title} onChange={this.handleChange} />
        <button> Add Movie </button>
      </form>
    )
  }
}

export default AddMovie;