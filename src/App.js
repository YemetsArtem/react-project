import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import Filters from "./components/Filters";
import ArticleList from "./components/ArticleList";
import Counter from "./components/Counter";

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <h4>Navigation: </h4>
          <ul>
            <li>
              <NavLink to="/counter" activeStyle={{ color: "red" }}>
                Counter
              </NavLink>
            </li>
            <li>
              <NavLink to="/filters" activeStyle={{ color: "red" }}>
                Filters
              </NavLink>
            </li>
            <li>
              <NavLink to="/articles" activeStyle={{ color: "red" }}>
                Articles
              </NavLink>
            </li>
          </ul>
        </nav>
        <Route path="/filters" component={Filters} />
        <Route path="/counter" component={Counter} />
        <Route path="/articles" component={ArticleList} />
      </div>
    );
  }
}

export default App;
