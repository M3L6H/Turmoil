import { connect } from 'react-redux';

import ConversationsList from './conversations_list';

const mapStateToProps = ({ entities: { beings, conversations, beingConversations } }) => ({
  beings,
  conversations: conversations ? Object.values(conversations) : [],
  beingConversations: beingConversations ? Object.values(beingConversations) : []
});

export default connect(mapStateToProps, null)(ConversationsList);
