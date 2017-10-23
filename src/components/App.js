// Step 1: Import React, and Component from react.
import React, {Component} from 'react';
// Step 2: Import render from react-dom
// Step 3: Import MoviesList from MoviesList
import MoviesList from './MoviesList';
// Step 4: Write a class called App, extending Component.
class App extends Component {
  constructor() {
    super();
    this.state = {
      movieTitle: '',
      movies: []
    };
    this.handleMovieTitle = this.handleMovieTitle.bind(this);
    this.handleAddMovieToList = this.handleAddMovieToList.bind(this);
  }
  handleMovieTitle(event) {
    this.setState({ movieTitle: event.target.value });
  }
  handleAddMovieToList() {
    let title = this.state.movieTitle;
    const movies = this.state.movies;
    movies.push(title);
    this.setState({ movies, movieTitle: '' });
  }
  render() {
    return (
      <MoviesList
        changeHandler={this.handleMovieTitle}
        addToMovies={this.handleAddMovieToList}
        title={this.state.movieTitle}
        movies={this.state.movies}
      />
    );
  }
}
export default App;


