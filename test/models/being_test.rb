# == Schema Information
#
# Table name: beings
#
#  id              :bigint           not null, primary key
#  custom_status   :string(128)
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  status          :string           default("online"), not null
#  username        :string(32)       not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
# Indexes
#
#  index_beings_on_email          (email) UNIQUE
#  index_beings_on_session_token  (session_token) UNIQUE
#  index_beings_on_username       (username) UNIQUE
#
require 'test_helper'

class BeingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
