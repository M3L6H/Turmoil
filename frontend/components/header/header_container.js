import { connect } from 'react-redux';

import { receiveAuthModal } from '../../actions/modals_actions';
import { deleteSession } from '../../actions/session_actions';

import Header from './header';

const mapStateToProps = ({ session, ui }) => ({
    currentBeingId: session.currentBeingId,
    formType: ui.modals.auth.formType,
    formOpen: ui.modals.auth.open
});

const mapDispatchToProps = (dispatch) => ({
    openSignUp: () => dispatch(receiveAuthModal(true, "signUp")),
    closeSignUp: () => dispatch(receiveAuthModal(false, "signUp")),
    openSignIn: () => dispatch(receiveAuthModal(true, "signIn")),
    closeSignIn: () => dispatch(receiveAuthModal(false, "signIn")),
    signOut: () => dispatch(deleteSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);