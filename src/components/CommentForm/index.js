import React, { Component } from 'react';
import "./style.css";

class CommentForm extends Component {
  render() {
    return (
        <form className="new_message">
            <input className="user_name" placeholder="Enter user name" />
            <input className="text" placeholder="Enter text" />
            <button>Save</button>
        </form>
    );
  }
}

export default CommentForm;
