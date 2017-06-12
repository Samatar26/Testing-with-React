import { SAVE_COMMENT } from './Types';

export function saveComment(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment,
  };
}
