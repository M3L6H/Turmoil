import { connect } from 'react-redux';

import { selectComrades } from '../../reducers/selectors';

import FriendsList from './friends_list';

const mapStateToProps = (state) => ({
  comrades: selectComrades(state),
  tab: state.ui.dashboard.tab
});

export default connect(mapStateToProps, null)(FriendsList);
