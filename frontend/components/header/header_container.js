import { connect } from 'react-redux'

import { createBeing } from '../../actions/beings_actions';
import { receiveAuthModal } from '../../actions/modals_actions';
import { receiveSidebar } from '../../actions/sidebar_actions';
import { createSession, deleteSession } from '../../actions/session_actions';

import Header from './header';

const mapStateToProps = ({ session, ui: { modals, inverted, header } }, ownProps) => ({
    ...ownProps,
    currentBeingId: session.currentBeingId,
    inverted,
    header,
    ...modals.auth
});

const mapDispatchToProps = (dispatch) => ({
    openSignUp: () => dispatch(receiveAuthModal(true, "signUp")),
    openSignIn: () => dispatch(receiveAuthModal(true, "signIn")),
    signUp: being => dispatch(createBeing(being)),
    signIn: being => dispatch(createSession(being)),
    signOut: () => dispatch(deleteSession()),
    closeForm: () => dispatch(receiveAuthModal(false)),
    openSidebar: () => dispatch(receiveSidebar({ open: true }))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
