import { connect } from 'react-redux';

import AppContainer from './app_container';

import { receiveDimensionModal } from '../../actions/modals_actions';
import { receiveSidebar } from '../../actions/sidebar_actions';
import { selectDimensions } from '../../reducers/selectors';

const mapStateToProps = (state) => ({
    ...state.ui.sidebar,
    signedIn: Boolean(state.session.currentBeingId),
    dimensions: selectDimensions(state)
});

const mapDispatchToProps = (dispatch) => ({
    closeSidebar: () => dispatch(receiveSidebar({ open: false })),
    openDimensionModal: () => dispatch(receiveDimensionModal(true))
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);