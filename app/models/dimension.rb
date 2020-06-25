# == Schema Information
#
# Table name: dimensions
#
#  id         :bigint           not null, primary key
#  name       :string(128)      not null
#  public     :boolean          default(FALSE), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  being_id   :bigint           not null
#
# Indexes
#
#  index_dimensions_on_being_id  (being_id)
#
class Dimension < ApplicationRecord
    validates :name, presence: true, length: { maximum: 128 }
    validates :public, inclusion: { in: [true, false] }

    validate :name_cannot_include_restricted_chars

    # Associations
    belongs_to :being
    has_many :roles, dependent: :destroy
    has_many :dimension_beings, dependent: :destroy
    has_many :clusters, dependent: :destroy 
    has_many :realms, dependent: :destroy

    # A dimension's default role is one that cannot be deleted
    def default_role
        self.roles.find_by(can_be_deleted: false)
    end

    # Custom validators
    def name_cannot_include_restricted_chars
        if /[^\w ]/ === self.name
            errors[:name] << "cannot contain restricted characters"
        end
    end
end
