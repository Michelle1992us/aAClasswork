# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    validates :email, :session_token, presence: true, uniqueness: true
    validates :password_digest, presence: true

    #SPIRE
    attr_reader :password

    def self.generate_session_token
        
    end

    def reset_session_token!

    end

    def ensure_session_token

    end

    def password=(pw)

    end

    def is_password?(pw)

    end

end
