# == Schema Information
#
# Table name: summonses
#
#  id           :bigint           not null, primary key
#  expire_after :bigint           default(1440)
#  max_uses     :integer
#  temporary    :boolean          default(FALSE), not null
#  url          :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  dimension_id :bigint           not null
#
# Indexes
#
#  index_summonses_on_dimension_id  (dimension_id)
#  index_summonses_on_url           (url) UNIQUE
#
require 'test_helper'

class SummonsTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
