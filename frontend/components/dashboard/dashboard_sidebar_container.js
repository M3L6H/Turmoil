import { connect } from 'react-redux';

import { receiveFriendsModal } from '../../actions/modals_actions';

import DashboardSidebar from './dashboard_sidebar';

const mapStateToProps = ({ ui: { modals: friends } }) => ({
  friendsModal: friends
});

const mapDispatchToProps = (dispatch) => ({
  receiveFriendsModal: (open) => dispatch(receiveFriendsModal(open))
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardSidebar);
