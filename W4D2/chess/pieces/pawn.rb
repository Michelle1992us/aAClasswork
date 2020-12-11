require_relative "piece"

class Pawn < Piece
  attr_reader :name, :symbol

  def initialize(color,board,pos)
    @color = color
    @board = board
    @pos = pos
    @name = "chumbo"
    @symbol = (@color == :black ? "\u2659" : "\u265F")
    
    super
  end

  def moves
    arr = []
    [0, forward_steps]
  end

  def at_start_row?
    if color == :white
      return true if self.pos[1] == 1
    else
      return true if self.pos[1] == 6
    end
  end

  def forward_dir
    color == :white ? 1 : -1
  end

  def forward_steps
    at_start_row? ? 2 : 1
  end

  def side_attacks
    # not sure what this does :^)
  end

  
end

new_pawn = Pawn.new(:white, "board", [0,0])