import {
  INCREMENT,
  DELETE_ARTICLE,
  CHANGE_SELECTION,
  CHANGE_DATE_RANGE,
  LOAD_ALL_ARTICLES,
  LOAD_ARTICLE,
  LOAD_ARTICLE_COMMENTS,
  ADD_COMMENT,
  FAIL,
  SUCCESS,
  START
} from "../constants";

export function increment() {
  return {
    type: INCREMENT
  };
}

export function deleteArticle(id) {
  return {
    type: DELETE_ARTICLE,
    payload: { id }
  };
}

export function changeSelection(selected) {
  return {
    type: CHANGE_SELECTION,
    payload: { selected }
  };
}

export function changeDateRange(dateRange) {
  return {
    type: CHANGE_DATE_RANGE,
    payload: { dateRange }
  };
}

export function addComment(comment, articleId) {
  return {
    type: ADD_COMMENT,
    payload: { comment, articleId },
    generateId: true
  };
}

export function loadAllArticles() {
  return dispatch => {
    dispatch({
      type: LOAD_ALL_ARTICLES + START
    });

    fetch("/api/article")
      .then(res => res.json())
      .then(response =>
        dispatch({
          type: LOAD_ALL_ARTICLES + SUCCESS,
          response
        })
      )
      .catch(error =>
        dispatch({
          type: LOAD_ALL_ARTICLES + FAIL,
          error
        })
      );
  };
}

export function loadArticleById(id) {
  return dispatch => {
    dispatch({
      type: LOAD_ARTICLE + START,
      payload: { id }
    });

    fetch(`/api/article/${id}`)
      .then(res => res.json())
      .then(response =>
        dispatch({
          type: LOAD_ARTICLE + SUCCESS,
          payload: { id },
          response
        })
      )
      .catch(error =>
        dispatch({
          type: LOAD_ARTICLE + FAIL,
          payload: { id },
          error
        })
      );
  };
}

export function loadArticleComments(articleId) {
  return dispatch => {
    dispatch({
      type: LOAD_ARTICLE_COMMENTS + START,
      payload: { articleId }
    });

    fetch(`/api/comment?article=${articleId}`)
      .then(res => res.json())
      .then(response =>
        dispatch({
          type: LOAD_ARTICLE_COMMENTS + SUCCESS,
          payload: { articleId },
          response: response
        })
      )
      .catch(error =>
        dispatch({
          type: LOAD_ARTICLE_COMMENTS + FAIL,
          payload: { articleId },
          error
        })
      );
  };
}
