import React, { PureComponent } from "react";
import PropTypes from 'prop-types';
import CSSTransition from 'react-addons-css-transition-group';
import { connect } from "react-redux";
import { deleteArticle } from "../../ac";
import CommentList from '../CommentList';
import "./style.css";

class Article extends PureComponent {
    static propTypes = {
        article: PropTypes.object.isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func.isRequired
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
        const body = <section className="article-body">
                        <p>{article.text}</p>
                        <CommentList comments={article.comments} />
                    </section> 

        return (isOpen && body);
    }

    get header() {
        const { article, isOpen } = this.props;
        const text = isOpen ? "close" : "open";
        const header =  <header className="article-title">
                            <h3>{article.title}</h3>
                            <button onClick={this.handleBtnClick}>{text}</button>
                            <button onClick={this.handleDelete}>delete</button>
                        </header>  
        return header;
    }

    handleBtnClick = () => {
        const {toggleOpen, article} = this.props;
        toggleOpen(article.id);
    }

    handleDelete = () => {
        const {deleteArticle, article} = this.props;
        deleteArticle(article.id);
    }
}

export default connect(null, { deleteArticle })(Article);
