require_relative "../board.rb"

class Piece

    attr_reader :board, :color
    attr_accessor :pos

    def initialize(color, board, pos)
        @color = color
        @board = board
        @pos = pos
        @symbol = (@color == :black ? "\u2659" : "\u265F")
    end

    def to_s
        # not sure what this is right now
    end
    
    def empty?
        # check if null piece
        return true if self.is_a?(Nullpiece)
    end

    def valid_moves
        # get valid moves for piece
    end

    def pos=(val)
        #set the position of the piece on the board
    end

    def symbol
        # symbol to represent piece on board
    end

    def move_into_check?(end_pos)
        # dup the board perfomr the move
        # see if the player is in check after the move
    end

end

# puts "\u2654".encode