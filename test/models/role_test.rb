# == Schema Information
#
# Table name: roles
#
#  id                  :bigint           not null, primary key
#  administrator       :boolean          default(FALSE), not null
#  all_mentions        :boolean          default(TRUE), not null
#  attach_files        :boolean          default(TRUE), not null
#  ban_members         :boolean          default(FALSE), not null
#  can_be_deleted      :boolean          default(TRUE), not null
#  change_nickname     :boolean          default(TRUE), not null
#  create_summons      :boolean          default(TRUE), not null
#  deafen_members      :boolean          default(FALSE), not null
#  embed_links         :boolean          default(TRUE), not null
#  kick_members        :boolean          default(FALSE), not null
#  manage_dimension    :boolean          default(FALSE), not null
#  manage_missives     :boolean          default(FALSE), not null
#  manage_nickname     :boolean          default(FALSE), not null
#  manage_realms       :boolean          default(FALSE), not null
#  manage_roles        :boolean          default(FALSE), not null
#  move_members        :boolean          default(FALSE), not null
#  mute_members        :boolean          default(FALSE), not null
#  name                :string(128)      not null
#  priority_speaker    :boolean          default(FALSE), not null
#  read_see_text_voice :boolean          default(TRUE), not null
#  send_missives       :boolean          default(TRUE), not null
#  speak               :boolean          default(TRUE), not null
#  video               :boolean          default(TRUE), not null
#  voice_connect       :boolean          default(TRUE), not null
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  dimension_id        :bigint           not null
#
# Indexes
#
#  index_roles_on_dimension_id  (dimension_id)
#
require 'test_helper'

class RoleTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
