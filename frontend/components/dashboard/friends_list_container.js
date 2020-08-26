import { connect } from 'react-redux';

import FriendsList from './friends_list';

const mapStateToProps = ({ entities: { comrades } }) => ({
  comrades
});

export default connect(mapStateToProps, null)(FriendsList);
