import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { filtratedArticles, articlesLoadingSelector } from "../../selectors";
import { loadAllArticles } from "../../ac";
import Article from "../Article";
import Loader from "../common/loader";
import accordion from "../../decorators/accordion";

class ArticleList extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired,
    openItemId: PropTypes.string,
    toggleOpenItem: PropTypes.func.isRequired
  };

  render() {
    if (this.props.loading) return <Loader />;
    return <ul>{this.body}</ul>;
  }

  get body() {
    const { toggleOpenItem, openItemId, articles } = this.props;

    return articles.map(article => (
      <li key={article.id} className="test__article-list--item">
        <Article
          article={article}
          isOpen={openItemId === article.id}
          toggleOpen={toggleOpenItem}
        />
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
)(accordion(ArticleList));
