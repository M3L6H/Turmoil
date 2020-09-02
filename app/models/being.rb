# == Schema Information
#
# Table name: beings
#
#  id              :bigint           not null, primary key
#  custom_status   :string(128)
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  status          :string           default("online"), not null
#  username        :string(32)       not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
# Indexes
#
#  index_beings_on_email          (email) UNIQUE
#  index_beings_on_session_token  (session_token) UNIQUE
#  index_beings_on_username       (username) UNIQUE
#
class Being < ApplicationRecord
  validates :username, :email, :password_digest, :session_token, :status, presence: true
  validates :username, :email, :session_token, uniqueness: true
  
  validates :username, length: { in: 5..32 }

  validates :status, inclusion: { in: %w(online idle do_not_disturb invisible) }
  validates :custom_status, length: { maximum: 128, allow_nil: true }

  validates :password, length: { minimum: 6, allow_nil: true }

  validate :username_cannot_include_restricted_chars,
    :status_cannot_include_restricted_chars,
    :email_should_be_in_valid_format

  attr_reader :password
  
  after_initialize :ensure_session_token

  # Associations
  has_many :being_conversations, dependent: :destroy
  has_many :joined_conversations, through: :being_conversations, source: :conversation
  has_many :conversations, dependent: :destroy
  has_many :dimensions, dependent: :restrict_with_exception
  has_many :dimension_beings, dependent: :destroy
  has_many :joined_dimensions, through: :dimension_beings, source: :dimension
  has_many :missives, as: :messageable
  has_many :comrades, dependent: :destroy
  has_many :comrade_beings, foreign_key: :comrade_id, class_name: :Comrade, dependent: :destroy

  # Auth methods
  class << self
    def find_by_credentials(username, password)
      user = self.find_by(username: username) || self.find_by(email: username)

      user if user && user.is_password?(password)
    end

    def generate_session_token
      SecureRandom::urlsafe_base64
    end
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.update!(session_token: Being.generate_session_token)
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= Being.generate_session_token
  end

  # Returns whether the passed object belongs to the being
  def owns(obj)
    obj.being_id == self.id
  end

  # Custom validators
  def username_cannot_include_restricted_chars
    if /[^\w_]/ === self.username
      errors[:username] << "cannot contain restricted characters"
    end
  end

  def status_cannot_include_restricted_chars
    if /[^\w.,\-_:\(\); ]/ === self.status
      errors[:status] << "cannot contain restricted characters"
    end
  end

  def email_should_be_in_valid_format
    unless URI::MailTo::EMAIL_REGEXP === self.email
      errors[:email] << "should be in a valid format"
    end
  end
end
