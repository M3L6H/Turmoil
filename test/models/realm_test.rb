# == Schema Information
#
# Table name: realms
#
#  id          :bigint           not null, primary key
#  being_limit :integer
#  name        :string(128)      not null
#  nsfw        :boolean          default(FALSE), not null
#  slowmode    :integer          default(0), not null
#  topic       :text             default(""), not null
#  type        :string           default("text"), not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  cluster_id  :bigint           not null
#
# Indexes
#
#  index_realms_on_cluster_id  (cluster_id)
#
require 'test_helper'

class RealmTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end