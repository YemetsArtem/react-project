import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import CSSTransition from 'react-addons-css-transition-group'
import { connect } from 'react-redux'
import { deleteArticle, loadArticleById } from '../../ac'
import { articleSelector } from '../../selectors'
import Loader from '../common/loader'
import CommentList from '../CommentList'
import translator from '../../decorators/translator'
import './style.css'

class Article extends PureComponent {
  static propTypes = {
    article: PropTypes.shape({
      title: PropTypes.string,
      text: PropTypes.string
    })
  }

  componentDidMount() {
    const { article, id, loadArticleById } = this.props
    if (!article || !article.text) loadArticleById(id)
  }

  render() {
    const { article, translate } = this.props
    if (!article) return null

    return (
      <div className="article">
        <header className="article-title">
          <h3>{article.title}</h3>
          <button onClick={this.handleDelete}>{translate('delete me')}</button>
        </header>
        <CSSTransition transitionName="article" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
          {this.body}
        </CSSTransition>
      </div>
    )
  }

  get body() {
    const { article } = this.props
    return article.loading ? (
      <Loader />
    ) : (
      <section className="article-body">
        <p>{article.text}</p>
        <CommentList comments={article.comments} article={article} />
      </section>
    )
  }

  handleDelete = () => {
    const { deleteArticle, id } = this.props
    deleteArticle(id)
  }
}

export default connect(
  (state, props) => ({
    article: articleSelector(state, props)
  }),
  { deleteArticle, loadArticleById }
)(translator(Article))
