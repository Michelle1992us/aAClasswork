class Question < ApplicationRecord
    validates :questions, presence: true
end
