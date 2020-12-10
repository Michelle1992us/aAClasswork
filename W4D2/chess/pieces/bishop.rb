require_relative "slideable.rb"

class Bishop < Piece
  include Slideable


  def initialize
    symbol = (color == :black ? "\u2657" : "\u265D")
  end

  def move_dirs
    DIAGONAL_DIRECTIONS
  end
  
end