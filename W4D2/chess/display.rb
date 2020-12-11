require_relative "board.rb"
require 'colorize'
require "colorized_string"
require_relative "cursor.rb"



class Display

    attr_reader :board, :cursor, :render

    def initialize(board)
        @board = board
        # @cursor = Cursor.new(cursor_pos, @board)
    end

    def render
        @board.board.each do |row|
            print (row.map {|el| el.symbol})
            print "\n"
        end
    end

end

# piece1 = Piece.new
# p piece1.name
board1 = Board.new
# p board1
# board1.fill_board
# board1.display_board
# O = Piece.new("O")
# board1[[0,0]] = O
# # board1.display_board
# p board1.empty?([0,1])
# p board1.move_piece([0,0], [0,1])
# board1.display_board
display1 = Display.new(board1)
display1.render
