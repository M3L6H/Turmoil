import { connect } from 'react-redux';

import DimensionsSidebar from './dimensions_sidebar';

import { receiveContent } from '../../actions/content_actions';
import { selectDimension } from '../../actions/dimension_menu_actions';
import { receiveDimensionModal } from '../../actions/modals_actions';
import { selectDimensions } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  ...state.ui.sidebar,
  signedIn: Boolean(state.session.currentBeingId),
  dimensions: selectDimensions(state),
  ...state.ui.menus.dimensionMenu
});

const mapDispatchToProps = (dispatch) => ({
  receiveContent: content => dispatch(receiveContent(content)),
  openDimensionModal: () => dispatch(receiveDimensionModal(true)),
  select: selected => dispatch(selectDimension(selected))
});

export default connect(mapStateToProps, mapDispatchToProps)(DimensionsSidebar);