require "singleton"
require_relative "piece"

class NullPiece < Piece
  attr_reader :color, :symbol

  include Singleton

  def initialize
    @color = "null"
    @symbol = "E"
    @moves = []
  end

end