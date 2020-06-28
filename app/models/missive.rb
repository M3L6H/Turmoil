# == Schema Information
#
# Table name: missives
#
#  id               :bigint           not null, primary key
#  body             :text             not null
#  messageable_type :string           not null
#  pinned           :boolean          default(FALSE), not null
#  username         :string           not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  being_id         :bigint           not null
#  messageable_id   :bigint           not null
#
# Indexes
#
#  index_missives_on_being_id                             (being_id)
#  index_missives_on_messageable_id_and_messageable_type  (messageable_id,messageable_type)
#
class Missive < ApplicationRecord
    validates :messageable_type, :body, :username, presence: true
    validates :messageable_type, inclusion: { in: %w(Realm Conversation) }
    validates :pinned, inclusion: { in: [true, false] }

    # Associations
    belongs_to :being
    belongs_to :messageable, polymorphic: true
end
