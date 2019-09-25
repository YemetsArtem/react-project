import React, { Component } from "react";
import CommentsPagination from "../CommentsPagination";
import { Router } from "react-router-dom";

class CommentsPage extends Component {
  render() {
    return <Router path="/comments/:page" render={getCommentsPagination} />;
  }

  getCommentsPagination = match => (
    <CommentsPagination page={match.params.page} />
  );
}

export default CommentsPage;
