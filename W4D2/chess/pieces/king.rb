class King < Piece
  include Stepable

  MOVES = [ [1,0], [-1,0], [0,1], [0,-1], [1,1], [-1,-1], [1,-1], [-1,1] ]
  
  def intialize
    symbol = (color == :black ? "\u2654" : "\u265A")
  end
  
  
  def move_diffs
    MOVES
  end
end