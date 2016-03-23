# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  buyer           :boolean          default("true"), not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base
  attr_reader :password

  has_many :reviews

  validates(
    :password_digest,
    :session_token,
    :buyer,
    presence: true
  )
  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}
  validate :invalid_username
  validate :invalid_email

  after_initialize :ensure_session_token

  def self.find_by_credentials(user, password)
    @user = User.find_by(username: user)
    return nil if @user.nil?
    (@user.is_password?(password)) ? @user : nil
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def password=(password)
    @password  = password
    self.password_digest = BCrypt::Password.create(@password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def invalid_email
    unless self.email.include?("@") && self.email.include?(".")
     errors.add(:invalid_email, ".")
     return false
    end
    true
  end

  def invalid_username
    bool = true
    unless self.username.include?("@")
     errors.add(:invalid_username, ": may not include a @")
     bool = false
    end
    unless self.username.include?(".")
     errors.add(:invalid_username, ": may not include a period")
     bool = false
    end
    bool
  end

end
