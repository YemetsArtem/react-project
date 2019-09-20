import { INCREMENT, DELETE_ARTICLE, CHANGE_SELECTION } from "../constants";

export function increment() {
    return {
        type:INCREMENT
    }
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}


export function changeSelection(selected) {
    return {
      type: CHANGE_SELECTION,
      payload: { selected }
    }
  }