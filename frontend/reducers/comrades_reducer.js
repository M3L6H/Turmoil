import { RECEIVE_COMRADE, REMOVE_COMRADE } from '../actions/comrades_actions';
import { RECEIVE_BEING } from '../actions/beings_actions';

export default (state={}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_BEING:
      return action.comrades;
    case RECEIVE_COMRADE:
      return { ...state, [action.comrade.id]: action.comrade };
    case REMOVE_COMRADE:
      const newState = Object.assign({}, state);
      delete newState[action.comradeId];
      return newState;
    default:
      return state;
  }
};
