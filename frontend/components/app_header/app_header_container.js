import { connect } from 'react-redux';

import { createBeing } from '../../actions/beings_actions';
import { receiveAuthModal } from '../../actions/modals_actions';
import { receiveSidebar } from '../../actions/sidebar_actions';
import { createSession, deleteSession } from '../../actions/session_actions';

import AppHeader from './app_header';

const mapStateToProps = ({ session, ui: { modals } }, ownProps) => ({
    currentBeingId: session.currentBeingId,
    ...modals.auth,
    ...ownProps
});

const mapDispatchToProps = (dispatch) => ({
    openSignUp: () => dispatch(receiveAuthModal(true, "signUp")),
    openSignIn: () => dispatch(receiveAuthModal(true, "signIn")),
    signUp: being => dispatch(createBeing(being)),
    signIn: being => dispatch(createSession(being)),
    signOut: () => dispatch(deleteSession()),
    closeForm: () => dispatch(receiveAuthModal(false)),
    openSidebar: () => dispatch(receiveSidebar({ open: true })),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);