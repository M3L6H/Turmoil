import { connect } from 'react-redux';

import { receiveAuthModal } from '../../actions/modals_actions';
import { deleteSession } from '../../actions/session_actions';

import Header from './header';

const mapStateToProps = ({ session, ui: { modals } }) => ({
    currentBeingId: session.currentBeingId,
    ...modals.auth
});

const mapDispatchToProps = (dispatch) => ({
    openSignUp: () => dispatch(receiveAuthModal(true, "signUp")),
    openSignIn: () => dispatch(receiveAuthModal(true, "signIn")),
    signOut: () => dispatch(deleteSession()),
    closeForm: () => dispatch(receiveAuthModal(false))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);