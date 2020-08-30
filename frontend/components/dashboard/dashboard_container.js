import { connect } from 'react-redux';

import Dashboard from './dashboard';

const mapStateToProps = ({ ui: { dashboard } }) => ({
  dashboard
});

export default connect(mapStateToProps, null)(Dashboard);
