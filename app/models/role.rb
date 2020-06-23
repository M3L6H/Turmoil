# == Schema Information
#
# Table name: roles
#
#  id                  :bigint           not null, primary key
#  administrator       :boolean          default(FALSE), not null
#  all_mentions        :boolean          default(TRUE), not null
#  attach_files        :boolean          default(TRUE), not null
#  ban_members         :boolean          default(FALSE), not null
#  can_be_deleted      :boolean          default(TRUE), not null
#  change_nickname     :boolean          default(TRUE), not null
#  create_summons      :boolean          default(TRUE), not null
#  deafen_members      :boolean          default(FALSE), not null
#  embed_links         :boolean          default(TRUE), not null
#  kick_members        :boolean          default(FALSE), not null
#  manage_dimension    :boolean          default(FALSE), not null
#  manage_missives     :boolean          default(FALSE), not null
#  manage_nickname     :boolean          default(FALSE), not null
#  manage_realms       :boolean          default(FALSE), not null
#  manage_roles        :boolean          default(FALSE), not null
#  move_members        :boolean          default(FALSE), not null
#  mute_members        :boolean          default(FALSE), not null
#  name                :string(128)      not null
#  priority_speaker    :boolean          default(FALSE), not null
#  read_see_text_voice :boolean          default(TRUE), not null
#  send_missives       :boolean          default(TRUE), not null
#  speak               :boolean          default(TRUE), not null
#  video               :boolean          default(TRUE), not null
#  voice_connect       :boolean          default(TRUE), not null
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  dimension_id        :bigint           not null
#
# Indexes
#
#  index_roles_on_dimension_id  (dimension_id)
#
class Role < ApplicationRecord
    validates :name, presence: true, length: { maximum: 128 }

    validates :administrator, :manage_dimension, :manage_roles, :manage_realms,
        :kick_members, :ban_members, :create_summons, :change_nickname,
        :manage_nickname, :read_see_text_voice, :send_missives, :manage_missives,
        :embed_links, :attach_files, :all_mentions, :voice_connect, :speak,
        :mute_members, :deafen_members, :move_members, :priority_speaker,
        :can_be_deleted, inclusion: { in: [true, false] }

    validate :name_cannot_include_restricted_chars

    # Associations
    belongs_to :dimension
    has_many :dimension_beings, dependent: :restrict_with_exception

    # Custom validators
    def name_cannot_include_restricted_chars
        if cannot_contain_restricted_chars(self.name)
            errors[:name] << "cannot contain restricted characters"
        end
    end
end
