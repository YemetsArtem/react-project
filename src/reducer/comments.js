import { ADD_COMMENT, LOAD_ARTICLE_COMMENTS, SUCCESS } from "../constants";
import { arrToMap } from "./utils";
import { Record } from "immutable";

const CommentRecord = Record({
  id: null,
  user: null,
  text: null
});

const ReducerRecord = Record({
  entities: arrToMap([], CommentRecord)
});

export default (commentsState = new ReducerRecord(), action) => {
  const { type, payload, randomId, response } = action;

  switch (type) {
    case ADD_COMMENT:
      return commentsState.setIn(
        ["entities", randomId],
        new CommentRecord({
          ...payload.comment,
          id: randomId
        })
      );

    case LOAD_ARTICLE_COMMENTS + SUCCESS:
      return commentsState.mergeIn(
        ["entities"],
        arrToMap(response, CommentRecord)
      );

    default:
      return commentsState;
  }
};
