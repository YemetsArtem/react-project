import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addComment } from '../../ac';
import "./style.css";

class CommentForm extends Component {
  state = {
      id:"123",
      name:"User",
      text:"Default"
  }

  render() {
    return (
        <div className="new_message">
            <input onChange={this.handleChange("name")} className="user_name" placeholder="Enter user name" />
            <input onChange={this.handleChange("text")}  className="text" placeholder="Enter text" />
            <button onClick={this.handleClick}>Save</button>
        </div>
    );
  }

  handleChange = (type) => (e) => {
    this.setState({
      [type]: e.target.value
    })
  }

  handleClick = () => {
    console.log(this.state);
    addComment(this.state);
  }
}

export default connect(null, addComment)(CommentForm);
