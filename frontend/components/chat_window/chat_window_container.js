import { connect } from 'react-redux';

import { createMissive } from '../../actions/missives_actions';
import { receiveMissive } from '../../actions/missives_actions';
import { selectMissives } from '../../reducers/selectors';

import ChatWindow from './chat_window';

const mapStateToProps = (state) => ({
  cable: state.cable,
  currentBeingId: state.session.currentBeingId,
  inverted: state.ui.inverted,
  missives: selectMissives(state),
  selectedRealm: state.entities.realms[state.ui.menus.realmMenu.selected],
  conversation: state.ui.dashboard.selected === "conversation" ? state.entities.conversations[state.ui.dashboard.conversation] : null
});

const mapDispatchToProps = (dispatch) => ({
  createMissive: missive => dispatch(createMissive(missive)),
  receiveMissive: data => dispatch(receiveMissive(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatWindow);
