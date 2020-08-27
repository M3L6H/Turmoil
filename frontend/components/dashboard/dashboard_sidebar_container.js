import { connect } from 'react-redux';

import { searchBeings } from '../../actions/beings_actions';
import { receiveFriendsModal } from '../../actions/modals_actions';

import DashboardSidebar from './dashboard_sidebar';

const mapStateToProps = (state) => ({
  friendsModal: state.ui.modals.friends,
  beings: state.entities.searchBeings
});

const mapDispatchToProps = (dispatch) => ({
  receiveFriendsModal: (open) => dispatch(receiveFriendsModal(open)),
  fetchBeings: (search) => dispatch(searchBeings(search))
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardSidebar);
