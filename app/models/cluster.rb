# == Schema Information
#
# Table name: clusters
#
#  id                  :bigint           not null, primary key
#  name                :string(128)      not null
#  next_orderable_type :string
#  permitted_roles     :bigint           default([]), not null, is an Array
#  prev_orderable_type :string
#  private             :boolean          default(FALSE), not null
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  dimension_id        :bigint           not null
#  next_orderable_id   :bigint
#  prev_orderable_id   :bigint
#
# Indexes
#
#  index_clusters_on_dimension_id                               (dimension_id)
#  index_clusters_on_next_orderable_id_and_next_orderable_type  (next_orderable_id,next_orderable_type)
#  index_clusters_on_prev_orderable_id_and_prev_orderable_type  (prev_orderable_id,prev_orderable_type)
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
