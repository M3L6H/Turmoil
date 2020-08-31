import { connect } from 'react-redux';

import { receiveFriendsModal } from '../../actions/modals_actions';
import { selectComrades, selectComradeBeings, selectBeings } from '../../reducers/selectors';

import FriendsList from './friends_list';

const mapStateToProps = (state) => ({
  beings: state.entities.beings,
  currentBeingId: state.session.currentBeingId,
  comrades: selectComrades(state),
  comradeBeings: selectComradeBeings(state),
  tab: state.ui.dashboard.tab
});

const mapDispatchToProps = dispatch => ({
  openFriendsModal: () => dispatch(receiveFriendsModal(true))
});

export default connect(mapStateToProps, mapDispatchToProps)(FriendsList);
