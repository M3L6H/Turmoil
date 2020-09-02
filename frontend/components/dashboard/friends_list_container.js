import { connect } from 'react-redux';

import { searchBeings } from '../../actions/beings_actions';
import { receiveFriendsModal } from '../../actions/modals_actions';
import {
  createComrade,
  deleteComrade,
  updateComrade,
  receiveComrade,
  receiveComradeBeing
} from '../../actions/comrades_actions';
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
  deleteComrade: comradeId => dispatch(deleteComrade(comradeId)),
  updateComrade: comrade => dispatch(updateComrade(comrade)),
  receiveComrade: comrade => dispatch(receiveComrade(comrade)),
  receiveComradeBeing: comrade => dispatch(receiveComradeBeing(comrade)),
  fetchSearchBeings: (search) => dispatch(searchBeings(search)),
  receiveFriendsModal: (open) => dispatch(receiveFriendsModal(open))
});

export default connect(mapStateToProps, mapDispatchToProps)(FriendsList);
