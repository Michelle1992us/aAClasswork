require "byebug"

module Slideable
  HORIZONTAL_AND_VERICAL_DIRECTIONS = [[-1,0],[1,0],[0,1],[0,-1]]
  DIAGONAL_DIRECTIONS = [[1,1],[-1,-1], [-1,1], [1,-1]]

  def horizontal_directions
    HORIZONTAL_AND_VERICAL_DIRECTIONS
  end

  def diagonal_directions
    DIAGONAL_DIRECTIONS
  end

  def moves(*dirs)
    moves_arr = []

    dirs.each do |arr|
      arr.each do |el|
        self.pos = pos
        moves_arr << [el[0] + pos[0], el[1] + pos[1]]
      end
    end

    moves_arr
  end

  def grow_unblocked_move_in_dir(dx, dy)
    debugger 
    grow_moves = []
    pos_x, pos_y = self.pos
    
    until (pos_x <= 0 || pos_x >= 7) || (pos_y <= 0 || pos_y >= 7)
      grow_moves << [pos_x + dx, pos_y + dy]
      pos_x = pos_x + dx
      pos_y = pos_y + dy
    end

    grow_moves
  end

end

class Piece
  include Slideable

  attr_accessor :pos

  def initialize(pos)
    @pos = pos
  end

  def move_direction
    diagonal_directions
  end

end

bishop = Piece.new([5,5])
# p bishop.moves(bishop.move_direction)
# p bishop.pos
p bishop.grow_unblocked_move_in_dir(1,1)





