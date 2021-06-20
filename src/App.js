import React from "react";
import axios from "axios";
import Movie from "./Movie";
// import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    isLoading: true
    // movies: []
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading: false });
  }

  componentDidMount() {
    this.getMovies();
  };

  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>{isLoading ? "Loading..." : movies.map(movie => {
        console.log(movie);
        return <Movie id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} />
      })}</div>
    );
  }
}



// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log("hello");
//   }
//   state = {
//     count: 0
//   }
//   add = () => {
//     this.setState(current => ({count: current.count + 1}));
//   };
//   minus = () => {
//     this.setState(current => ({count: current.count - 1}));
//   };
//   componentDidUpdate() {
//     console.log("updated!");
//   }
//   render() {
//     console.log("im rendering");
//     return (
//     <div>
//       <h1>The no. is: {this.state.count}</h1>
//       <button onClick={this.add}>Add</button>
//       <button onClick={this.minus}>Minus</button>
//     </div>
//     )
//   }
// }



export default App;