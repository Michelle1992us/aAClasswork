class Integer
  # Integer#hash already implemented for you
end

class Array
  def hash
    sum = 0
    self.each_with_index do |ele, i|
      sum += ele.hash * i
    end
    sum
  end
end



class String
  def hash
    sum = 0
    self.each_char.with_index do |char, i|
      sum += char.ord.hash * i 
      #.ord coverts a character of a string into a value between 0-225
    end
    sum
  end
end

class Hash
  # This returns 0 because rspec will break if it returns nil
  # Make sure to implement an actual Hash#hash method
  def hash
    self.keys.sort.hash
  end
end
