import { connect } from 'react-redux';

import { createDimensionBeing } from '../../actions/dimension_beings_actions';
import { receiveAuthModal } from '../../actions/modals_actions';
import { updateSummons } from '../../actions/summonses_actions';

import Summons from './summons';

const mapStateToProps = (state, ownProps) => {
    const search = ownProps.location.search;
    const params = new URLSearchParams(search);

    const summons = state.entities.summonses[params.get("url")];
    
    return {
        currentBeingId: state.session.currentBeingId,
        inverted: state.ui.inverted,
        errors: state.errors.summonses,
        summons,
        dimension: summons && state.entities.dimensions[summons.dimensionId]
    };
};

const mapDispatchToProps = (dispatch) => ({
    openSignUp: () => dispatch(receiveAuthModal(true, "signUp")),
    openSignIn: () => dispatch(receiveAuthModal(true, "signIn")),
    loadSummons: url => dispatch(updateSummons(url)),
    join: dimension => dispatch(createDimensionBeing({}, dimension.id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Summons);