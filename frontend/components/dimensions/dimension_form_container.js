import { connect } from 'react-redux';

import DimensionForm from './dimension_form';

import { createDimension } from '../../actions/dimensions_actions';
import { receiveDimensionModal } from '../../actions/modals_actions';

const mapStateToProps = ({ ui: { modals } }, ownProps) => ({
    ...modals.dimensions,
    ...ownProps
});

const mapDispatchToProps = (dispatch) => ({
    closeForm: () => dispatch(receiveDimensionModal(false)),
    createDimension: dimension => dispatch(createDimension(dimension))
});

export default connect(mapStateToProps, mapDispatchToProps)(DimensionForm);