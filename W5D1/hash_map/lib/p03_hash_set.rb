class HashSet
  # attr_reader :count
  attr_accessor :store, :count

  def initialize(num_buckets = 8)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(key)
    if !include?(key)
      self[key.hash] << key 
      @count += 1
    end
    resize! if num_buckets < self.count
  end

  def include?(key)
    self[key.hash].include?(key)

  end

  def remove(key)
    if include?(key)
      self[key.hash].delete(key)
      @count -= 1
    end
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
    @store[num % num_buckets]
  end

  def num_buckets
    @store.length
  end

  def resize!
    old_store = self.store
    @count = 0
    self.store = Array.new(num_buckets * 2) {Array.new}
    old_store.flatten.each {|ele| insert(ele)}
  end
end
