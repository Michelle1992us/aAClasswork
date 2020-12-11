require_relative "slideable.rb"

class Queen < Piece
  include Slideable


  def initialize
    symbol = (color == :black ? "\u2655" : "\u265B")
  end

  def move_dirs
    HORIZONTAL_AND_VERICAL_DIRECTIONS + DIAGONAL_DIRECTIONS
  end
  
end