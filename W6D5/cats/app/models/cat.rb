# == Schema Information
#
# Table name: cats
#
#  id          :bigint           not null, primary key
#  birth_date  :date             not null
#  color       :string           not null
#  name        :string           not null
#  sex         :string(1)        not null
#  description :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
require 'action_view'
class Cat < ApplicationRecord
  include ActionView::Helpers::DateHelper

  def age
    time_age_in_words(birth_date)
  end

  validates :color, inclusion: %w(blue black brown)     #Zach said either way can work (validates don't happen until you kitty.save!)
  validates :sex, inclusion: { in: %w(M F)}             #Zach said either way can work
  validates :birth_date, :name, :sex, :color, :description, presence: true

end

#To do this, require action_view in your cat.rb file, then add ActionView::Helpers::DateHelper to your Cat class)
  # validates :size, inclusion: { in: %w(small medium large),
  #   %w() is a "word array" - the elements are delimited by spaces.