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
class Cluster < ApplicationRecord
    validates :name, presence: true
    validates :name, length: { maximum: 128 }
    validates :private, inclusion: { in: [true, false] }

    validate :name_cannot_include_restricted_chars

    # Associations
    belongs_to :dimension
    has_many :realms, dependent: :destroy

    # Custom validations
    def name_cannot_include_restricted_chars
        if /[^\w_\- ]/ === self.name
            errors[:name] << "cannot contain restricted characters"
        end
    end
end
