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

  # def moves(arrays)
  #   moves_arr = []

  #   arrays.each do |arr|
  #     arr.each do |el|
  #       self.pos = pos
  #       moves_arr << [el[0] + pos[0], el[1] + pos[1]]
  #     end
  #   end

  #   moves_arr
  # end

  def grow_unblocked_move_in_dir(dx, dy)
     
    grow_moves = []
    pos_x, pos_y = self.pos
    
    until (pos_x <= 0 || pos_x >= 7) || (pos_y <= 0 || pos_y >= 7)
      grow_moves << [pos_x + dx, pos_y + dy]
      pos_x = pos_x + dx
      pos_y = pos_y + dy
    end

    grow_moves
  end

  def moves
    all_moves = []
    if self.move_directions.include?(diagonal_directions)
      DIAGONAL_DIRECTIONS.each do |dir|
        all_moves << grow_unblocked_move_in_dir(dir[0], dir[1])
      end
    end
    if self.move_directions.include?(horizontal_directions)
      HORIZONTAL_AND_VERICAL_DIRECTIONS.each do |dir|
        all_moves << grow_unblocked_move_in_dir(dir[0], dir[1])
      end
    end
    all_moves
  end
  #have array of possible moves (1 diagonal square in each poss dir)
  #grow each of those moves w/in bounds of the board
  #shovel into all_moves array

end

# class Piece
#   include Slideable

#   attr_accessor :pos

#   def initialize(pos)
#     @pos = pos
#   end

#   def move_directions
#     [diagonal_directions,horizontal_directions]
#   end

# end

# bishop = Piece.new([5,5])
# # p bishop.moves(bishop.move_direction)
# p bishop.moves
# # # p bishop.pos
# p bishop.grow_unblocked_move_in_dir(1,1)




# moves = [6,6],[4,4]
# (5,5)

