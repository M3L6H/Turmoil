import { connect } from 'react-redux';

import { receiveDashboardSelection } from '../../actions/dashboard_actions'

import FriendsHeader from './friends_header';

const mapStateToProps = ({ ui: { dashboard: { tab } } }) => ({
  tab
});

const mapDispatchToProps = dispatch => ({
  receiveDashboardSelection: selection => dispatch(receiveDashboardSelection(selection))
});

export default connect(mapStateToProps, mapDispatchToProps)(FriendsHeader);
