import { connect } from 'react-redux';

import { createRealm } from '../../actions/realms_actions';
import { receiveRealmModal } from '../../actions/modals_actions';

import RealmForm from './realm_form';

const mapStateToProps = (state, ownProps) => ({
    dimensionId: state.ui.menus.dimensionMenu.selected,
    open: state.ui.modals.realms.open,
    ...ownProps
});

const mapDispatchToProps = (dispatch) => ({
    createRealm: realm => dispatch(createRealm(realm)),
    closeForm: () => dispatch(receiveRealmModal(false))
});

export default connect(mapStateToProps, mapDispatchToProps)(RealmForm);