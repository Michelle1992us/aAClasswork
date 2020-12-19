class User < ApplicationRecord
    validates :username, uniqueness: true

    has_many :authored_polls,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :Poll
end
