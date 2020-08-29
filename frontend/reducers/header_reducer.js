import { RECEIVE_HEADER } from '../actions/header_actions';

export default (state="app", { type, header }) => {
  Object.freeze(state);

  switch (type) {
    case RECEIVE_HEADER:
      return header;
    default:
      return state;
  }
};
