import { connect } from 'react-redux';

import { updateRealm } from '../../actions/realms_actions';
import { receiveEditRealmModal } from '../../actions/modals_actions';

import EditRealmForm from './edit_realm_form';

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    open: state.ui.modals.editRealms.open
});

const mapDispatchToProps = (dispatch) => ({
    updateRealm: realm => dispatch(updateRealm(realm)),
    closeForm: () => dispatch(receiveEditRealmModal(false))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditRealmForm);