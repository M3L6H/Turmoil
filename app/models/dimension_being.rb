# == Schema Information
#
# Table name: dimension_beings
#
#  id           :bigint           not null, primary key
#  banned       :boolean          default(FALSE), not null
#  nickname     :string(32)       not null
#  temporary    :boolean          default(FALSE), not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  being_id     :bigint           not null
#  dimension_id :bigint           not null
#  role_id      :bigint
#
# Indexes
#
#  index_dimension_beings_on_being_id_and_dimension_id  (being_id,dimension_id) UNIQUE
#  index_dimension_beings_on_role_id                    (role_id)
#
class DimensionBeing < ApplicationRecord
    validates :nickname, presence: true, length: { in: 5..32 }
    validates :temporary, :banned, inclusion: { in: [true, false] }
    validates :being_id, uniqueness: { scope: :dimension_id }

    validate :nickname_cannot_include_restricted_chars

    # Associations
    belongs_to :dimension
    belongs_to :being
    belongs_to :role, optional: true

    # Custom validators
    def nickname_cannot_include_restricted_chars
        if /[^\w_]/ === self.nickname
            errors[:nickname] << "cannot contain restricted characters"
        end
    end
end
