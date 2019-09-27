import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ArticleList from '../ArticleList'
import Article from '../Article'

export class ArticlesPage extends Component {
  render() {
    return (
      <section>
        <h3>Article List</h3>
        <ArticleList />
        <Route path="/articles/:id" children={this.getArticle} />
      </section>
    )
  }

  getArticle = ({ match }) => {
    return match ? <Article id={match.params.id} key={match.params.id} /> : <h3>Please select an Article...</h3>
  }
}

export default ArticlesPage
