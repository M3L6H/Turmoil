import { RECEIVE_CONTENT } from '../actions/content_actions';

export default (state="dashboard", { type, content }) => {
  Object.freeze(state);

  switch(type) {
    case RECEIVE_CONTENT:
      return content;
    default:
      return state;
  }
};
