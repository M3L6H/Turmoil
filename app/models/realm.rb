# == Schema Information
#
# Table name: realms
#
#  id                  :bigint           not null, primary key
#  being_limit         :integer
#  name                :string(128)      not null
#  next_orderable_type :string
#  nsfw                :boolean          default(FALSE), not null
#  prev_orderable_type :string
#  realm_type          :string           default("text"), not null
#  slowmode            :integer          default(0), not null
#  topic               :text             default(""), not null
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  cluster_id          :bigint
#  dimension_id        :bigint           not null
#  next_orderable_id   :bigint
#  prev_orderable_id   :bigint
#
# Indexes
#
#  index_realms_on_cluster_id                                 (cluster_id)
#  index_realms_on_dimension_id                               (dimension_id)
#  index_realms_on_next_orderable_id_and_next_orderable_type  (next_orderable_id,next_orderable_type)
#  index_realms_on_prev_orderable_id_and_prev_orderable_type  (prev_orderable_id,prev_orderable_type)
#
class Realm < ApplicationRecord
    validates :name, :slowmode, :realm_type, presence: true
    validates :name, length: { maximum: 128 }
    validates :topic, exclusion: { in: [nil] }, length: { maximum: 1024 }
    validates :being_limit, numericality: { allow_nil: true, less_than: 100, greater_than: 0, only_integer: true }
    validates :nsfw, inclusion: { in: [true, false] }
    validates :realm_type, inclusion: { in: %w(text voice) }
    
    validate :name_cannot_include_restricted_chars

    # Associations
    belongs_to :cluster, optional: true
    belongs_to :dimension

    # Custom validations
    def name_cannot_include_restricted_chars
        if /[^\w\-]/ === self.name
            errors[:name] << "cannot contain restricted characters"
        end
    end
end
