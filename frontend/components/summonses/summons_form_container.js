import { connect } from 'react-redux';

import { createSummons, updateSummons } from '../../actions/summonses_actions';
import { receiveSummonsModal } from '../../actions/modals_actions';

import SummonsesForm from './summons_form';

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    ...state.ui.modals.summonses,
    dimensionId: state.ui.menus.dimensionMenu.selected
});

const mapDispatchToProps = (dispatch) => ({
    createSummons: summons => dispatch(createSummons(summons)),
    updateSummons: summons => dispatch(updateSummons(summons)),
    openUrlForm: () => dispatch(receiveSummonsModal(true, "url")),
    openEditForm: () => dispatch(receiveSummonsModal(true, "edit")),
    closeForm: () => dispatch(receiveSummonsModal(false)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SummonsesForm);