import React, { Component } from "react";
import PropTypes from "prop-types";
import CSSTransition from "react-addons-css-transition-group";
import { connect } from "react-redux";
import { loadArticleComments } from "../../ac";
import Comment from "../Comment";
import CommentForm from "../CommentForm";
import toggleOpen from "../../decorators/toggleOpen";
import Loader from "../common/loader";
import "./style.css";

class CommentList extends Component {
  static propTypes = {
    article: PropTypes.object,
    isOpen: PropTypes.bool,
    toggleOpenItem: PropTypes.func.isRequired
  };

  componentDidUpdate(oldProps) {
    const { isOpen, article, loadArticleComments } = this.props;
    if (
      isOpen &&
      !oldProps.isOpen &&
      !article.commentsLoading &&
      !article.commentsLoaded
    ) {
      loadArticleComments(article.id);
    }
  }

  render() {
    return (
      <div className="comments">
        {this.header}
        <CSSTransition
          transitionName="comments"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {this.body}
        </CSSTransition>
      </div>
    );
  }

  get header() {
    const { isOpen, toggleOpenItem } = this.props;
    const text = isOpen ? "hide comments" : "show comments";
    const header = (
      <header>
        <h4> Comment list: </h4>
        <button onClick={toggleOpenItem}>{text}</button>
      </header>
    );

    return header;
  }

  get body() {
    const {
      article: { comments, id, commentsLoading, commentsLoaded },
      isOpen
    } = this.props;

    if (!isOpen) return null;
    if (commentsLoading) return <Loader />;
    if (!commentsLoaded) return null;

    const body = (
      <div className="comment-body">
        {comments.length !== 0 ? (
          <ul> {this.getComments(comments)} </ul>
        ) : (
          <small> No comments yet </small>
        )}
        <CommentForm articleId={id} />
      </div>
    );

    return isOpen && body;
  }

  getComments(comments) {
    return comments.map(id => (
      <li key={id}>
        <Comment id={id} />
      </li>
    ));
  }
}

export default connect(
  null,
  { loadArticleComments }
)(toggleOpen(CommentList));
