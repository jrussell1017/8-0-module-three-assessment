import { Component } from "react";

class Locations extends Component {
  constructor() {
    super();
    this.state = {
      locationData: [],
      showLocations: false,
    };
  }

  //   handleShowHide = () => {
  //     this.setState({
  //       display: true
  //     });
  //   };

  handlefetch = () => {
    fetch("https://ghibliapi.herokuapp.com/locations")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({
          locationData: data,
        });
      });
  };

  componentDidMount() {
    this.handlefetch();
  }

  render() {
    let locationsList = this.state.locationData.map((location) => {
      return (
        <div key={location.name}>
          <li>
            Name: {location.name}
            <br />
            Climate: {location.climate}
            <br />
            Terrain: {location.terrain}
            <br />
          </li>
        </div>
      );
    });
    return (
      <div className="locations">
        <div>List of Locations</div>
        <button
          onClick={() =>
            this.setState({
              showLocations: !this.state.showLocations,
            })
          }
        >
          {this.state.showLocations ? "Hide Locations" : "Show Locations"}
        </button>
        {this.state.showLocations && (
          <ul className="location-list">{locationsList}</ul>
        )}
      </div>
    );
  }
}

export default Locations;
