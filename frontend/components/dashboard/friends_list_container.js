import { connect } from 'react-redux';

import { searchBeings } from '../../actions/beings_actions';
import { receiveFriendsModal } from '../../actions/modals_actions';
import { createComrade } from '../../actions/comrades_actions';
import { selectComrades, selectComradeBeings, selectSearchBeings } from '../../reducers/selectors';

import FriendsList from './friends_list';

const mapStateToProps = (state) => ({
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
  fetchSearchBeings: (search) => dispatch(searchBeings(search)),
  receiveFriendsModal: (open) => dispatch(receiveFriendsModal(open))
});

export default connect(mapStateToProps, mapDispatchToProps)(FriendsList);
