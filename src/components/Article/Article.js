import React, { PureComponent } from "react";
import CommentList from '../CommentList/CommentList';
class Article extends PureComponent {
    render() {
        const { article, isOpen } = this.props;

        return (
            <div className="article">
                <h3>{article.title}</h3>
                <button onClick={this.handleBtnClick}>
                    {isOpen ? "close" : "open"}
                </button>
                {isOpen && this.getArticleBody(article)}
            </div>
        );
    }

    getArticleBody(article) {
        return (
            <div>
                <p>{article.text}</p>
                {article.comments && <CommentList comments={article.comments} />}
            </div>
        )
    }

    handleBtnClick = () => this.props.toggleOpen(this.props.article.id);
}

export default Article;
