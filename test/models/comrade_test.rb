# == Schema Information
#
# Table name: comrades
#
#  id         :bigint           not null, primary key
#  blocked    :bigint
#  pending    :boolean          default(TRUE), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  being_id   :bigint           not null
#  comrade_id :bigint           not null
#
# Indexes
#
#  index_comrades_on_comrade_id_and_being_id  (comrade_id,being_id) UNIQUE
#
require 'test_helper'

class ComradeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
