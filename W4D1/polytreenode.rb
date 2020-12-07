require "byebug"

class PolyTreeNode
    attr_reader :value, :parent, :children
    attr_writer :parent
    def initialize(value)
        @value = value
        @parent = nil
        @children = []
    end
    def parent=(node)
        # return nil if parent.nil?
        if !node.nil?
            if self.parent
                @parent.children.delete(self)
                node.children << self
                @parent = node
            else
                node.children << self
                @parent = node
            end
        else
            @parent = nil
            return nil
        end
    end

    def add_child(child)
        if !child.children.include?(self)
            child.parent=(self)
        end
    end

    def remove_child(child)
        if !self.children.include?(child)
            raise "I'm not a child"
        else
            child.parent=(nil)
        end
    end

    def dfs(target)
        # debugger
        return self if target == self.value
        self.children.each do |child|
            result = child.dfs(target)
            if result != nil
                return result
            end
        end
        nil
    end

    def bfs(target)
        # debugger
        array = [self]
        while array.length > 0 
            check = array.shift
            if check.value == target
                return check
            end
            array.concat(check.children)
        end
        nil
    end


end