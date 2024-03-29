import { connect } from 'react-redux';

import { searchBeings } from '../../actions/beings_actions';
import { receiveFriendsModal } from '../../actions/modals_actions';
import {
  createComrade,
  deleteComrade,
  updateComrade,
  receiveComrade,
  receiveComradeBeing,
  removeComrade,
  removeComradeBeing
} from '../../actions/comrades_actions';
import { 
  createConversation,
  createBeingConversation
} from '../../actions/conversations_actions';
import { selectComrades, selectComradeBeings, selectSearchBeings } from '../../reducers/selectors';

import FriendsList from './friends_list';

const mapStateToProps = (state) => ({
  cable: state.cable,
  beings: state.entities.beings,
  currentBeingId: state.session.currentBeingId,
  comrades: selectComrades(state),
  comradeBeings: selectComradeBeings(state),
  searchBeings: selectSearchBeings(state),
  friendsModal: state.ui.modals.friends,
  tab: state.ui.dashboard.tab
});

const mapDispatchToProps = dispatch => ({
  createComrade: (comrade) => dispatch(createComrade(comrade)),
  deleteComrade: (comradeId, comradeBeing) => dispatch(deleteComrade(comradeId, comradeBeing)),
  updateComrade: (comrade, comradeBeing) => dispatch(updateComrade(comrade, comradeBeing)),
  receiveComrade: comrade => dispatch(receiveComrade(comrade)),
  receiveComradeBeing: comrade => dispatch(receiveComradeBeing(comrade)),
  removeComrade: id => dispatch(removeComrade({ id })),
  removeComradeBeing: id => dispatch(removeComradeBeing({ id })),
  fetchSearchBeings: (search) => dispatch(searchBeings(search)),
  receiveFriendsModal: (open) => dispatch(receiveFriendsModal(open)),
  createConversation: (conversation) => dispatch(createConversation(conversation)),
  createBeingConversation: (beingConversation) => dispatch(createBeingConversation(beingConversation))
});

export default connect(mapStateToProps, mapDispatchToProps)(FriendsList);
