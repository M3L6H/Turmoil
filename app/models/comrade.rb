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
class Comrade < ApplicationRecord
  validates :comrade_id, uniqueness: { scope: :being_id }

  validate :blocked_should_be_one_of

  belongs_to :comrade,
    foreign_key: :comrade_id,
    class_name: :Being
    
  belongs_to :being

  
  def blocked_should_be_one_of
    if ![nil, self.comrade_id, self.being_id].include?(self.blocked)
      errors[:blocked] << "must be one of nil, #{ self.comrade_id }, #{ self.being_id }, but isntead received #{ self.blocked }"
    end
  end
end
