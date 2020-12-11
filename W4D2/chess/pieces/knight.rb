require_relative "stepable.rb"

class Knight < Piece
  include Stepable

  MOVES = [[-2,-1], [-2,1], [-1, -2], [-1, 2], [1,-2], [1,2], [2,-1], [2,1]]
  
  def intialize
    symbol = (color == :black ? "\u2658" : "\u265E")
  end
  
  
  def move_diffs
    MOVES
  end
end