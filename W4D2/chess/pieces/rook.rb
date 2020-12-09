class Rook < Piece
  include Slideable


  def initialize
    symbol = (color == :black ? "\u2656" : "\u265C")
  end

  def move_dirs
    HORIZONTAL_AND_VERICAL_DIRECTIONS
  end
  
end