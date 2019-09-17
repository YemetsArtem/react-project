import React, { Component } from "react";
import Article from "../Article/Article";
import accordion from "../../decorators/accordion";

class ArticleList extends Component {
    render() {
        return <ul>{this.body}</ul>;
    }

    get body() {
        const {toggleOpenItem, openItemId, articles} = this.props;
        
        return articles.map(article => (
            <li key={article.id}>
                <Article
                    article={article}
                    isOpen={openItemId === article.id}
                    toggleOpen={toggleOpenItem}
                />
            </li>
        ));
    }
}

export default accordion(ArticleList);
