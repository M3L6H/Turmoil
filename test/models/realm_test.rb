# == Schema Information
#
# Table name: realms
#
#  id                  :bigint           not null, primary key
#  being_limit         :integer
#  name                :string(128)      not null
#  next_orderable_type :string
#  nsfw                :boolean          default(FALSE), not null
#  prev_orderable_type :string
#  realm_type          :string           default("text"), not null
#  slowmode            :integer          default(0), not null
#  topic               :text             default(""), not null
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  cluster_id          :bigint
#  dimension_id        :bigint           not null
#  next_orderable_id   :bigint
#  prev_orderable_id   :bigint
#
# Indexes
#
#  index_realms_on_cluster_id                                 (cluster_id)
#  index_realms_on_dimension_id                               (dimension_id)
#  index_realms_on_next_orderable_id_and_next_orderable_type  (next_orderable_id,next_orderable_type)
#  index_realms_on_prev_orderable_id_and_prev_orderable_type  (prev_orderable_id,prev_orderable_type)
#
require 'test_helper'

class RealmTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
