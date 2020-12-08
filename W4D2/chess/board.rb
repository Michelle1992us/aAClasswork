# Phase I: Board
# Your Board class should hold a 2-dimensional array (an array of arrays). Each position in the board either holds a moving Piece or a NullPiece (NullPiece will inherit from Piece).

# There are many different kinds of pieces in chess, and each moves a specific way. Based on their moves, they can be placed in four categories:

# Sliding pieces (Bishop/Rook/Queen)
# Stepping pieces (Knight/King)
# Null pieces (occupy the 'empty' spaces)
# Pawns (we'll do this class last)

# To start off, you'll want to create an empty Piece class as a placeholder for now. Write code for #initialize so we can setup the board with instances of Piece in locations where a Queen/Rook/Knight/ etc. will start and nil where the NullPiece will start.

# The Board class should have a #move_piece(start_pos, end_pos) method. This should update the 2D grid and also the moved piece's position. You'll want to raise an exception if:

# there is no piece at start_pos or
# the piece cannot move to end_pos.

class Piece

    attr_reader :name

    def initialize(name = nil)
        @name = "E" if @name == nil
    end 

end

class Board


    attr_accessor :board

    def initialize()
        @board = Array.new(8) {Array.new(8)}

    end

    def fill_board
        (0...@board.length).each do |j|
            (0...@board.length).each {|i| @board[j][i] = Piece.new}
        end
    end
end

# piece1 = Piece.new
# p piece1.name
board1 = Board.new
# p board1
board1.fill_board
p board1.board