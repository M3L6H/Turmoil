import { connect } from 'react-redux';

import { createMissive } from '../../actions/missives_actions';
import { selectMissives } from '../../reducers/selectors';

import ChatWindow from './chat_window';

const mapStateToProps = (state) => ({
    missives: selectMissives(state)
});

const mapDispatchToProps = (dispatch) => ({
    createMissive: missive => dispatch(createMissive(missive))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatWindow);