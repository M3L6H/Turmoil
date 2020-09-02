import { connect } from 'react-redux';

import ConversationsList from './conversations_list';

import {
  fetchConversation,
  deleteConversation,
  deleteBeingConversation,
  removeConversation
} from '../../actions/conversations_actions';
import { receiveDashboardSelection } from '../../actions/dashboard_actions';
import { receiveHeader } from '../../actions/header_actions';
import { receiveSidebar } from '../../actions/sidebar_actions';

const mapStateToProps = ({ entities: { beings, conversations, beingConversations }, session: { currentBeingId }, ui: { dashboard } }) => ({
  currentBeingId,
  beings,
  conversations: conversations ? Object.values(conversations) : [],
  beingConversations: beingConversations ? Object.values(beingConversations) : [],
  dashboard
});

const mapDispatchToProps = (dispatch) => ({
  fetchConversation: conversationId => dispatch(fetchConversation(conversationId)),
  deleteConversation: conversationId => dispatch(deleteConversation(conversationId)),
  deleteBeingConversation: beingConversation => {
    console.log(beingConversation);
    dispatch(deleteBeingConversation(beingConversation.id));
    dispatch(removeConversation({ id: beingConversation.conversationId }));
  },
  receiveDashboardSelection: (dashboard) => dispatch(receiveDashboardSelection(dashboard)),
  receiveHeader: (header) => dispatch(receiveHeader(header)),
  closeSidebar: () => dispatch(receiveSidebar({ open: false }))
});

export default connect(mapStateToProps, mapDispatchToProps)(ConversationsList);
