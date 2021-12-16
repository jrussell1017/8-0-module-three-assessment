import { Component } from "react";

class Movies extends Component {
  constructor() {
    super();
    this.state = {
      movieData: [],
      userSelection: {},
      display: false,
    };
  }

  handlefetch = () => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({
          movieData: data,
        });
      });
  };

  handleChange = (e) => {
    let foundMovie = this.state.movieData.find((film) => {
      return film.title === e.target.value;
    });

    this.setState({
      userSelection: foundMovie,
      display: true,
    });
  };

  componentDidMount() {
    this.handlefetch();
  }

  render() {
    let movieTitles = this.state.movieData.map((film) => {
      return (
        <option key={film.title} value={film.title}>
          {film.title}
        </option>
      );
    });
    return (
      <div className="movies">
        <h1>Select a Movie</h1>
        <select onChange={this.handleChange}>
          <option value="default"></option>
          {movieTitles}
        </select>
        {this.state.display ? (
          <div>
            <h3>Title: {this.state.userSelection.title}</h3>
            <ul>
              <li>
                Release Date: {this.state.userSelection.release_date}
                <br />
                Description: {this.state.userSelection.description}
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Movies;
