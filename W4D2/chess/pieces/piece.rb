require_relative "board.rb"

class Piece

    attr_reader :board, :color
    attr_accessor :pos

    def initialize(color, board, pos)
        @color = color
        @board = board
        @pos = pos
    end

    def moves

    end

end

# puts "\u2654".encode