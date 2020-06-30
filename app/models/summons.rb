# == Schema Information
#
# Table name: summonses
#
#  id           :bigint           not null, primary key
#  expire_after :bigint           default(86400)
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
class Summons < ApplicationRecord
    validates :url, presence: true, uniqueness: true
    validates :temporary, inclusion: { in: [true, false] }

    # Associations
    belongs_to :dimension
end
