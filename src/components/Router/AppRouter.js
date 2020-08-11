import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { MdLocalMovies } from "react-icons/md";
import MoviesList from "../MovieList";
import MovieDetails from "../MovieDetails";

const AppRouter = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <Link className="title" to="/">
          <MdLocalMovies className="icon" />
          Movie Database
        </Link>
      </header>
      <Switch>
        <Route exact path="/" component={MoviesList} />
        <Route path="/:id" component={MovieDetails} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
