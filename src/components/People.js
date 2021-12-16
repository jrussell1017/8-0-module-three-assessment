import { Component } from "react";

class People extends Component {
  constructor() {
    super();
    this.state = {
      characterData: [],
      userInput: "",
      display: false,
    };
  }

  handlefetch = () => {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({
          characterData: data,
        });
      });
  };

  handleUserInput = (e) => {
    this.setState({
      userInput: e.target.value,
    });
  };

  handleSubmit = (e) => {
      e.preventDefault();
      let characterMatch = this.state.characterData.find((character) => {
          return character.name === this.state.userInput
        })
      this.setState({
          userInput: characterMatch,
          display: true
      })
  };

  componentDidMount() {
    this.handlefetch();
  }

  render() {
    return (
      <div className="people">
        <h1>Search for a Person</h1>
        <form>
          <input
            value={this.state.userInput}
            type="text"
            placeholder="Find your Person"
            onChange={this.handleUserInput}
          />
          <button type="submit" onClick={this.handleSubmit}>Submit</button>
        </form>
        {this.state.display ? 
            <div>
                Name: {this.state.userInput.name}
                <br />
                Age: {this.state.userInput.age}
                <br />
                Gender: {this.state.userInput.gender}
            </div> : ""
        }
      </div>
    );
  }
}

export default People;
