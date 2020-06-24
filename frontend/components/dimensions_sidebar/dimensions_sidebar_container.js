import { connect } from 'react-redux';

import DimensionsSidebar from './dimensions_sidebar';

import { receiveDimensionModal } from '../../actions/modals_actions';
import { selectDimensions } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
    ...state.ui.sidebar,
    signedIn: Boolean(state.session.currentBeingId),
    dimensions: selectDimensions(state),
    ...ownProps
});

const mapDispatchToProps = (dispatch) => ({
    openDimensionModal: () => dispatch(receiveDimensionModal(true))
});

export default connect(mapStateToProps, mapDispatchToProps)(DimensionsSidebar);