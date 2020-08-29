import { connect } from 'react-redux'

import Header from './header';

const mapStateToProps = ({ ui: { header } }) => ({
  header
});

export default connect(mapStateToProps, null)(Header);
