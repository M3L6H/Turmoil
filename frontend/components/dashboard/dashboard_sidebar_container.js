import { connect } from 'react-redux';

import DashboardSidebar from './dashboard_sidebar';

const mapStateToProps = ({ entities: { comrades } }) => ({
  comrades
});

export default connect(mapStateToProps, null)(DashboardSidebar);
