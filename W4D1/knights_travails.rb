# Phase 0: Description
# In this project we will create a class that will find the shortest path for a Chess Knight from a starting position to an end position. Both the start and end positions should be on a standard 8x8 chess board.

# NB: this problem is a lot like word chains!

# Write a class, KnightPathFinder. Initialize your KnightPathFinder with a starting position. For instance:

# kpf = KnightPathFinder.new([0, 0])
# Ultimately, I want to be able to find paths to end positions:

# kpf.find_path([2, 1]) # => [[0, 0], [2, 1]]
# kpf.find_path([3, 3]) # => [[0, 0], [2, 1], [3, 3]]

# To help us find paths, we will build a move tree. The values in the tree will be positions. A node is a child of another node if you can move from the parent position directly to the child position. The root node of the tree should be the knight's starting position. You will want to build on your PolyTreeNode work, using PolyTreeNode instances to represent each position.

# Start by creating an instance variable, self.root_node that stores the knight's initial position in an instance of your PolyTreeNode class.

# You will be writing an instance method KnightPathFinder#build_move_tree to build the move tree, beginning with self.root_node. Call this method in initialize

require_relative "polytreenode.rb"

class KnightPathFinder
    attr_reader :starting_pos, :root_node, :considered_positions
    attr_writer :root_node

    def initialize(pos)
        @pos = pos
        @root_node = PolyTreeNode.new(pos)
        @considered_positions = [pos]
        build_move_tree
    end

    def build_move_tree
        queue = [@root_node]
        until queue.empty? #while queue.length >0
            current_node = queue.shift #take first ele of array
            moves = new_move_positions(current_node.value)
            moves.each do |move|
                next_move = PolyTreeNode.new(move) 
                current_node.add_child(next_move)
                queue << next_move
                p next_move.value
            end
        end
    end

    def self.valid_moves(pos)
        #possible knight moves: left one + 2 up, right one + 2 up, left 1 and 2 down, right 1 and 2 down
        #1 up and 2 right, 1 up and 2 left, 1 down and 2 right, 1 down and 2 left

        #Example: pos = [0,0]
        x = pos[0]
        y = pos[1]
        moves = [[x+2,y+1], [x+2,y-1], [x-2,y+1], [x-2,y-1],
                 [x+1,y+2], [x+1,y-2], [x-1,y+2], [x-1,y-2]]
        #+x = go right, -x = go left, +y = go up, -y = go down
        
        #find if you can do the move from initial position. Can't go off the 8x8 board
        moves.select do |move|
            (move[0] >= 0 && move[0] <= 7) && (move[1] >= 0 && move[1] <= 7)
        end
    end

    def new_move_positions(pos) #find NEW positions you can move to from a given position (no duplicates)
        possible_positions = KnightPathFinder.valid_moves(pos)
        possible_positions.reject! {|move| @considered_positions.include?(move)} #"!" to mutate instead of returning new array
        @considered_positions.concat(possible_positions)
        possible_positions
    end
    def find_path(end_pos)
        end_node = self.root_node.bfs(end_pos)
        trace_path_back(end_node).reverse
    end
    def trace_path_back(end_node)
        new_arr = []
        current_node = end_node
        while current_node != nil
            new_arr << current_node.value
            current_node = current_node.parent
        end
        new_arr
    end
end

# knight = KnightPathFinder.new([0,0])
# # p knight.considered_positions.length
# p knight.build_move_tree
# # p knight.new_move_positions([1,2])
# # p KnightPathFinder.valid_moves([2,1])
# # p knight.new_move_positions([2,1])
kpf = KnightPathFinder.new([0, 0])
# k = PolyTreeNode.new ([7,6])
# p kpf.trace_path_back(k)
p kpf.find_path([7, 6]) # => [[0, 0], [1, 2], [2, 4], [3, 6], [5, 5], [7, 6]]
p kpf.find_path([6, 2]) # => [[0, 0], [1, 2], [2, 0], [4, 1], [6, 2]]

