import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSTransition from 'react-addons-css-transition-group'
import { connect } from 'react-redux'
import { loadArticleComments } from '../../ac'
import Comment from '../Comment'
import CommentForm from '../CommentForm'
import toggleOpen from '../../decorators/toggleOpen'
import Loader from '../common/loader'
import { Consumer as UserConsumer } from '../contexts/user'
import translator from '../../decorators/translator'
import './style.css'

class CommentList extends Component {
  static propTypes = {
    article: PropTypes.object,
    isOpen: PropTypes.bool,
    toggleOpenItem: PropTypes.func.isRequired
  }

  componentDidUpdate(oldProps) {
    const { isOpen, article, loadArticleComments } = this.props
    if (isOpen && !oldProps.isOpen && !article.commentsLoading && !article.commentsLoaded) {
      loadArticleComments(article.id)
    }
  }

  render() {
    return (
      <div className="comments">
        {this.header}
        <CSSTransition transitionName="comments" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
          {this.body}
        </CSSTransition>
      </div>
    )
  }

  get header() {
    const { isOpen, toggleOpenItem, translate } = this.props
    const text = isOpen ? 'hide comments' : 'show comments'
    const header = (
      <header>
        <UserConsumer>{(user) => <h3>Username: {user}</h3>}</UserConsumer>
        <h4> Comment list: </h4>
        <button onClick={toggleOpenItem}>{translate(text)}</button>
      </header>
    )

    return header
  }

  get body() {
    const {
      article: { comments, id, commentsLoading, commentsLoaded },
      isOpen,
      translate
    } = this.props

    if (!isOpen) return null
    if (commentsLoading) return <Loader />
    if (!commentsLoaded) return null

    const body = (
      <ul className="comment-body">
        {comments.length !== 0 ? this.getComments(comments) : <li>{translate('No comments yet')}</li>}
        <CommentForm articleId={id} />
      </ul>
    )

    return isOpen && body
  }

  getComments(comments) {
    return comments.map((id) => (
      <li key={id}>
        <Comment id={id} />
      </li>
    ))
  }
}

export default connect(
  null,
  { loadArticleComments }
)(translator(toggleOpen(CommentList)))
