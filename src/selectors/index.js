import { createSelector } from "reselect";

export const articlesMapSelector = state => state.articles.entities;
export const articlesLoadingSelector = state => state.articles.loading;
export const commentsSelector = state => state.comments.entities;
export const dateRangeSelector = state => state.filters.dateRange;
export const selectedSelector = state => state.filters.selected;

export const idSelector = (_, props) => props.id;
export const articlesListSelector = createSelector(
  articlesMapSelector,
  articlesMap => articlesMap.valueSeq().toJS()
);

export const filtratedArticles = createSelector(
  articlesListSelector,
  selectedSelector,
  dateRangeSelector,
  (articles, selected, dateRange) => {
    const { from, to } = dateRange;

    return articles.filter(article => {
      const published = Date.parse(article.date);
      const isSeleted = !selected || !selected.length;
      const isRanged = !from || !to || (published > from && published < to);

      return (
        (isSeleted ||
          selected.find(selected => selected.value === article.id)) &&
        isRanged
      );
    });
  }
);

export const createCommentSelector = () =>
  createSelector(commentsSelector, idSelector, (comments, id) => {
    return comments.get(id);
  });
