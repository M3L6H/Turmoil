import { connect } from 'react-redux';

import { searchBeings } from '../../actions/beings_actions';
import { createComrade } from '../../actions/comrades_actions';
import { receiveHeader } from '../../actions/header_actions';
import { receiveFriendsModal } from '../../actions/modals_actions';
import {
  selectComrades,
  selectComradeBeings,
  selectSearchBeings
} from '../../reducers/selectors';

import DashboardSidebar from './dashboard_sidebar';

const mapStateToProps = (state) => ({
  friendsModal: state.ui.modals.friends,
  beings: selectSearchBeings(state),
  comrades: selectComrades(state),
  comradeBeings: selectComradeBeings(state),
  currentBeingId: state.session.currentBeingId
});

const mapDispatchToProps = (dispatch) => ({
  createComrade: (comrade) => dispatch(createComrade(comrade)),
  receiveFriendsModal: (open) => dispatch(receiveFriendsModal(open)),
  fetchBeings: (search) => dispatch(searchBeings(search)),
  receiveHeader: (header) => dispatch(receiveHeader(header))
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardSidebar);
