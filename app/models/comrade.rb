# == Schema Information
#
# Table name: comrades
#
#  id         :bigint           not null, primary key
#  blocked    :boolean          default(FALSE), not null
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
class Comrade < ApplicationRecord
  validates :blocked, :pending, inclusion: { in: [true, false] }
  validates :comrade_id, uniqueness: { scope: :being_id }

  belongs_to :comrade,
    foreign_key: :comrade_id,
    class_name: :Being
    
  belongs_to :being
end
