import { DELETE_ARTICLE, ADD_COMMENT } from "../constants";
import { normalizedArticles } from "../fixtures";
import { arrToMap } from "./utils";
import { Record } from "immutable";

const ArticleRecord = Record({
    title: null,
    id: null,
    text: null,
    date: null,
    comments: []
})

export default (articles = arrToMap(normalizedArticles, ArticleRecord), action) => {
    const { type, payload, randomId } = action;
    
    switch (type) {
        case DELETE_ARTICLE:
            return articles.delete(payload.id);

        case ADD_COMMENT:
            return articles.updateIn(
                [payload.articleId, "comments"], 
                comments => (comments || []).concat(randomId)
            );

        default:
            return articles;
    }
};
