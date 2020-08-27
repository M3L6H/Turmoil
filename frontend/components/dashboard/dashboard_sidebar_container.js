import { connect } from 'react-redux';

import { fetchBeings } from '../../actions/beings_actions';
import { receiveFriendsModal } from '../../actions/modals_actions';

import DashboardSidebar from './dashboard_sidebar';

const mapStateToProps = (state) => ({
  friendsModal: state.ui.modals.friends,
  beings: state.entities.beings
});

const mapDispatchToProps = (dispatch) => ({
  receiveFriendsModal: (open) => dispatch(receiveFriendsModal(open)),
  fetchBeings: (search) => dispatch(fetchBeings(search))
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardSidebar);
