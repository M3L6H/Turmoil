import { connect } from 'react-redux';

import { createBeing } from '../../actions/beings_actions';
import { receiveAuthModal } from '../../actions/modals_actions';
import { createSession } from '../../actions/session_actions';

import Splash from './splash';

const mapStateToProps = (state) => ({
    currentBeingId: state.session.currentBeingId,
    inverted: state.ui.inverted
});

const mapDispatchToProps = (dispatch) => ({
    openSignUp: () => dispatch(receiveAuthModal(true, "signUp")),
    openSignIn: () => dispatch(receiveAuthModal(true, "signIn")),
    signUp: being => dispatch(createBeing(being)),
    signIn: being => dispatch(createSession(being)),
    closeForm: () => dispatch(receiveAuthModal(false))
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);