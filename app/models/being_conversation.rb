class BeingConversation < ApplicationRecord
  validates :being_id, uniqueness: { scope: [:conversation_id] }

  validate :being_id_should_not_be_owner

  # Associations
  belongs_to :being
  belongs_to :conversation

  # Custom validations
  def being_id_should_not_be_owner
    if self.being_id == Conversation.find(self.conversation_id).being_id
      errors[:being_id] << "should not be the conversation owner"
    end
  end
end
