import React, { Component } from "react";
import Comment from "../Comment/Comment";
class CommentList extends Component {
    state = {
        isOpen:true
    }
    render() {
        const {comments} = this.props;

        return (
            <div className="comments">
                <h4>Comment list: </h4>
                <button onClick={this.handleBtnClick}>
                    { this.state.isOpen ? "close": "open" }
                </button>
                { this.state.isOpen && <ul>{this.getCommentListBody(comments)}</ul> }
            </div>
        );
    }

    getCommentListBody(comments) {
        return comments.map(comment => (
            <li key={comment.id}>
                <Comment comment={comment} />
            </li>
        ));
    }

    handleBtnClick = () => this.setState({isOpen:!this.state.isOpen})
}

export default CommentList;
