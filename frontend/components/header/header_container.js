import { connect } from 'react-redux';

import Header from './header';

const mapStateToProps = (state) => ({
    currentBeingId: state.session.currentBeingId 
});

const mapDispatchToProps = (dispatch) => ({
    openSignUp: () => dispatch(openSignUp())   
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);