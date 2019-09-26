import React, { Component } from 'react'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'
import Filters from './components/Filters'
import ArticlesPage from './components/Routes/ArticlesPage'
import CommentsPage from './components/Routes/CommentsPage'
import Counter from './components/Counter'

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <h3>Navigation: </h3>
          <ul>
            <li>
              <NavLink to="/counter" activeStyle={{ color: 'red' }}>
                Counter
              </NavLink>
            </li>
            <li>
              <NavLink to="/filters" activeStyle={{ color: 'red' }}>
                Filters
              </NavLink>
            </li>
            <li>
              <NavLink to="/articles" activeStyle={{ color: 'red' }}>
                Articles
              </NavLink>
            </li>
            <li>
              <NavLink to="/comments" activeStyle={{ color: 'red' }}>
                Comments
              </NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Redirect from="/" to="/articles" exact />
          <Route path="/counter" component={Counter} exact />
          <Route path="/filters" component={Filters} />
          <Route
            path="/articles/new"
            render={() => <h1>New Article Page</h1>}
          />
          <Route path="/articles" component={ArticlesPage} />
          <Route path="/comments" component={CommentsPage} />
          <Route path="/error" render={() => <h1>Error Page</h1>} />
          <Route path="*" render={() => <h1>Not Found Page</h1>} />
        </Switch>
      </div>
    )
  }
}

export default App
