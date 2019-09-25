import React, { Component } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import Filters from "./components/Filters";
import ArticlePage from "./components/Routes/ArticlesPage";
import CommentsPage from "./components/Routes/CommentsPage";
import Counter from "./components/Counter";

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <h3>Navigation: </h3>
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
            <li>
              <NavLink to="/comments" activeStyle={{ color: "red" }}>
                Comments
              </NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/filters" component={Filters} exact />
          <Route path="/counter" component={Counter} exact />
          <Route path="/comments" component={CommentsPage} exact />
          <Route path="/articles/new" render={() => <h3>New article</h3>} />
          <Route path="/articles" component={ArticlePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
