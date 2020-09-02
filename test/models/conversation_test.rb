# == Schema Information
#
# Table name: conversations
#
#  id                :bigint           not null, primary key
#  conversation_type :string           default("text"), not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  being_id          :bigint           not null
#
# Indexes
#
#  index_conversations_on_being_id  (being_id)
#
require 'test_helper'

class ConversationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
