import { connect } from 'react-redux';

import { createMissive } from '../../actions/missives_actions';
import { receiveMissive } from '../../actions/missives_actions';
import { selectMissives } from '../../reducers/selectors';

import ChatWindow from './chat_window';

const mapStateToProps = (state) => ({
    cable: state.cable,
    missives: selectMissives(state),
    selectedRealm: state.entities.realms[state.ui.menus.realmMenu.selected]
});

const mapDispatchToProps = (dispatch) => ({
    createMissive: missive => dispatch(createMissive(missive)),
    receiveMissive: data => dispatch(receiveMissive(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatWindow);