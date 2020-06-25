# == Schema Information
#
# Table name: realms
#
#  id          :bigint           not null, primary key
#  being_limit :integer
#  name        :string(128)      not null
#  nsfw        :boolean          default(FALSE), not null
#  slowmode    :integer          default(0), not null
#  topic       :text             default(""), not null
#  type        :string           default("text"), not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  cluster_id  :bigint           not null
#
# Indexes
#
#  index_realms_on_cluster_id  (cluster_id)
#
class Realm < ApplicationRecord
    validates :name, :topic, :slowmode, :type, presence: true
    validates :name, length: { maximum: 128 }
    validates :topic, length: { maximum: 1024 }
    validates :being_limit, numericality: { allow_nil: true, less_than: 100, greater_than: 0, only_integer: true }
    validates :nsfw, inclusion: { in: [true, false] }
    validates :type, inclusion: { in: %w(text voice) }
    
    validate :name_cannot_include_restricted_chars

    # Custom validations
    def name_cannot_include_restricted_chars
        if cannot_contain_restricted_chars(self.name)
            errors[:name] << "cannot contain restricted characters"
        end
    end
end
