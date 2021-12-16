import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Home from "./components/Home";
import Movies from "./components/Movies";
import People from "./components/People";
import Locations from "./components/Locations";


function App() {
  return (
    <Router>
      <div>
        {/* Navbar */}
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
          <Link to="/people">People</Link>
          <Link to="/locations">Locations</Link>
        </nav>
      </div>


      {/* Route your pages */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/movies" component={Movies} />
        <Route path="/people" component={People} />
        <Route path="/locations" component={Locations} />
      </Switch>
    </Router>
  );
}

export default App;
