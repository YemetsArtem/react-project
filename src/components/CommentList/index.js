import React, { Component } from "react";
import PropTypes from "prop-types";
import Comment from "../Comment";
import CommentForm from "../CommentForm";
import toggleOpen from "../../decorators/toggleOpen";
import CSSTransition from "react-addons-css-transition-group";
import "./style.css";

class CommentList extends Component {
  static propTypes = {
    comments: PropTypes.array,
    openItemId: PropTypes.string,
    toggleOpenItem: PropTypes.func.isRequired
  };

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
    const { isOpen, comments, openItemId } = this.props;
    const body = (
      <div className="comment-body">
        {comments.length !== 0 ? (
          <ul> {this.getComments(comments)} </ul>
        ) : (
          <small> No comments yet </small>
        )}
        <CommentForm articleId={openItemId} />
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

export default toggleOpen(CommentList);
