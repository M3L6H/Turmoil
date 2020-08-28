import { connect } from 'react-redux';

import { searchBeings } from '../../actions/beings_actions';
import { createComrade } from '../../actions/comrades_actions';
import { receiveFriendsModal } from '../../actions/modals_actions';
import { selectSearchBeings } from '../../reducers/selectors';

import DashboardSidebar from './dashboard_sidebar';

const mapStateToProps = (state) => ({
  friendsModal: state.ui.modals.friends,
  beings: selectSearchBeings(state)
});

const mapDispatchToProps = (dispatch) => ({
  createComrade: (comrade) => dispatch(createComrade(comrade)),
  receiveFriendsModal: (open) => dispatch(receiveFriendsModal(open)),
  fetchBeings: (search) => dispatch(searchBeings(search))
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardSidebar);
