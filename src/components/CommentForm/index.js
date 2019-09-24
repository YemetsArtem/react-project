import React, { Component } from "react";
import { connect } from "react-redux";
import { addComment } from "../../ac";
import "./style.css";

class CommentForm extends Component {
  static propTypes = {};

  state = {
    user: "",
    text: ""
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="comment-form">
        user:{" "}
        <input
          value={this.state.user}
          onChange={this.handleChange("user")}
          className={this.getClassName("user")}
        />
        comment:{" "}
        <input
          value={this.state.text}
          onChange={this.handleChange("text")}
          className={this.getClassName("text")}
        />
        <input
          type="submit"
          value="submit"
          disabled={!this.isValidForm()}
          className={"save-btn"}
        />
      </form>
    );
  }

  handleSubmit = ev => {
    ev.preventDefault();
    this.props.addComment(this.state);
    this.setState({
      user: "",
      text: ""
    });
  };

  isValidForm = () => Object.keys(this.state).every(this.isValidField);

  isValidField = type => this.state[type].length >= limits[type].min;

  getClassName = type =>
    this.isValidField(type) ? "form-input" : "form-input__error";

  handleChange = type => ev => {
    const { value } = ev.target;
    if (value.length > limits[type].max) return;
    this.setState({
      [type]: value
    });
  };
}

const limits = {
  user: {
    min: 4,
    max: 50
  },
  text: {
    min: 1,
    max: 300
  }
};

export default connect(
  null,
  (dispatch, ownProps) => ({
    addComment: comment => dispatch(addComment(comment, ownProps.articleId))
  })
)(CommentForm);
