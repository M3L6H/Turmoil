# == Schema Information
#
# Table name: clusters
#
#  id              :bigint           not null, primary key
#  name            :string(128)      not null
#  permitted_roles :bigint           default([]), not null, is an Array
#  private         :boolean          default(FALSE), not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  dimension_id    :bigint           not null
#
# Indexes
#
#  index_clusters_on_dimension_id  (dimension_id)
#
require 'test_helper'

class ClusterTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
