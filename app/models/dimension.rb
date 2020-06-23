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
end
