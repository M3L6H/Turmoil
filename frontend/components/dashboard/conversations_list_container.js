import { connect } from 'react-redux';

import ConversationsList from './conversations_list';

import { receiveDashboardSelection } from '../../actions/dashboard_actions';
import { receiveHeader } from '../../actions/header_actions';

const mapStateToProps = ({ entities: { beings, conversations, beingConversations }, ui: { dashboard } }) => ({
  beings,
  conversations: conversations ? Object.values(conversations) : [],
  beingConversations: beingConversations ? Object.values(beingConversations) : [],
  dashboard
});

const mapDispatchToProps = (dispatch) => ({
  receiveDashboardSelection: (dashboard) => dispatch(receiveDashboardSelection(dashboard)),
  receiveHeader: (header) => dispatch(receiveHeader(header))
});

export default connect(mapStateToProps, mapDispatchToProps)(ConversationsList);
