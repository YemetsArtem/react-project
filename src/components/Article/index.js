import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import CSSTransition from "react-addons-css-transition-group";
import { connect } from "react-redux";
import { deleteArticle, loadArticleById } from "../../ac";
import Loader from "../common/loader";
import CommentList from "../CommentList";
import "./style.css";

class Article extends PureComponent {
  static propTypes = {
    article: PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string
    }).isRequired,
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func.isRequired
  };

  componentDidUpdate(oldProps) {
    const { isOpen, article, loadArticleById } = this.props;
    if (!oldProps.isOpen && isOpen && !article.text)
      loadArticleById(article.id);
  }

  render() {
    return (
      <article className="article">
        {this.header}
        <CSSTransition
          transitionName="article"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {this.body}
        </CSSTransition>
      </article>
    );
  }

  get body() {
    const { article, isOpen } = this.props;

    if (article.loading) return <Loader />;

    const body = (
      <section className="article-body">
        <p>{article.text}</p>
        <CommentList comments={article.comments} article={article} />
      </section>
    );

    return isOpen && body;
  }

  get header() {
    const { article, isOpen } = this.props;
    const text = isOpen ? "close" : "open";
    const header = (
      <header className="article-title">
        <h3>{article.title}</h3>
        <button onClick={this.handleBtnClick}>{text}</button>
        <button onClick={this.handleDelete}>delete</button>
      </header>
    );
    return header;
  }

  handleBtnClick = () => {
    const { toggleOpen, article } = this.props;
    toggleOpen(article.id);
  };

  handleDelete = () => {
    const { deleteArticle, article } = this.props;
    deleteArticle(article.id);
  };
}

export default connect(
  null,
  { deleteArticle, loadArticleById }
)(Article);
