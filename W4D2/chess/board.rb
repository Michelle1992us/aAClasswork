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

require_relative "./pieces/null_piece.rb"

class Piece

    attr_reader :name

    def initialize(name = nil)
        @name = "E" if @name == nil
        @name = name if name != nil
    end 

end

class Board


    attr_accessor :board

    def initialize()
        @board = Array.new(8) {Array.new(8, NullPiece.instance)}

    end

    def fill_board
        (0...@board.length).each do |j|
            (0...@board.length).each {|i| @board[j][i] = NullPiece.instance}
        end
    end

    def [](position)
        row, col = position
        @board[row][col]
    end

    def []=(position, piece)
        row, col = position
        @board[row][col] = piece
    end

    # def display_board
    #     @board.each do |row|
    #         p row.map {|p| p.name }
    #     end
    # end

    def empty?(pos)
        row, col = pos
        @board[row][col].is_a?(NullPiece)  
    end

    def move_piece(start_pos, end_pos)
        start_row, start_col = start_pos
        end_row, end_col = end_pos
        raise "No piece found" if empty?([start_row, start_col])
        raise "Square occupied" if !empty?([end_row, end_col])
        start = [start_row, start_col]
        dest = [end_row, end_col]

        piece_to_move = @board[start_row][start_col]
        @board[start_row][start_col] = Piece.new
        @board[end_row][end_col] = piece_to_move

        return        
    end

end

# # piece1 = Piece.new
# # p piece1.name
# board1 = Board.new
# # p board1
# board1.fill_board
# # board1.display_board
# O = Piece.new("O")
# board1[[0,0]] = O
# # board1.display_board
# p board1.empty?([0,1])
# p board1.move_piece([0,0], [0,1])
# board1.display_board
