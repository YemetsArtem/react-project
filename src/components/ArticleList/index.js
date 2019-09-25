import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { filtratedArticles, articlesLoadingSelector } from "../../selectors";
import { loadAllArticles } from "../../ac";
import Loader from "../common/loader";

class ArticleList extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired,
    openItemId: PropTypes.string
  };

  render() {
    if (this.props.loading) return <Loader />;
    return <ul>{this.body}</ul>;
  }

  get body() {
    const { articles } = this.props;

    return articles.map(article => (
      <li key={article.id} className="test__article-list--item">
        <NavLink to={`/articles/${article.id}`} activeStyle={{ color: "red" }}>
          {article.title}
        </NavLink>
      </li>
    ));
  }

  componentDidMount() {
    const { fetchData } = this.props;
    fetchData && fetchData();
  }
}

export default connect(
  state => ({
    articles: filtratedArticles(state),
    loading: articlesLoadingSelector(state)
  }),
  { fetchData: loadAllArticles }
)(ArticleList);
