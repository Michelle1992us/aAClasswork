class Poll < ApplicationRecord
    validates :title, presence: true
    validates :author_id, presence: true

end
