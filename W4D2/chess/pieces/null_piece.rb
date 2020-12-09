require "Singleton"

class NullPiece < Piece
  attr_reader :color, :symbol

  include Singleton

  def initialize
    @color = "null"
    @symbol = "null"
    @moves = []
  end

end