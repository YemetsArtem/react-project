import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import Article from "../Article";
import accordion from "../../decorators/accordion";

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        openItemId: PropTypes.string,
        toggleOpenItem: PropTypes.func.isRequired
    }

    render() {
        return <ul>{this.body}</ul>;
    }

    get body() {
        const { toggleOpenItem, openItemId, articles, filters, state } = this.props;

        console.log("filters = ", filters, state);
        
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
}


export default connect((state) => ({
    state:state,
    articles: state.articles,
    filters:state.filters
}))(accordion(ArticleList));
