# Write a class Employee that has attributes that return the employee's name, title, salary, and boss.

# Write another class, Manager, that extends Employee. Manager should have an attribute that holds an array of all employees assigned to the manager. Note that managers might report to higher level managers, of course.

# Add a method, bonus(multiplier) to Employee. Non-manager employees should get a bonus like this: bonus = (employee salary) * multiplier

# Managers should get a bonus based on the total salary of all of their subordinates, as well as the manager's subordinates' subordinates, and the subordinates' subordinates' subordinates, etc.
# bonus = (total salary of all sub-employees) * multiplier

class Employee

    attr_reader :name, :title, :salary, :boss

    def initialize(name, title, salary, boss=nil)
        @name = name
        @title = title
        @salary = salary
        @boss = boss
        @boss.add_employee(self) unless @boss.nil? 
    end

    def bonus(multiplier)
        @salary*multiplier
    end

end

class Manager < Employee

    def initialize(name, title, salary, boss=nil)
        @employees = []
        super
    end

    def add_employee(employee)
        @employees << employee
    end


    def bonus(multiplier)
        total_salary*multiplier
    end

    def total_salary
        counter = @salary

        @employees.each do |employee|
            counter += employee.salary
            if employee.is_a?(Manager)
                self.total_salary(@employees)
            end
        end
        counter
    end
end

manager1 = Manager.new("Michelle", "VP", 1250000)
employee1 = Employee.new("kyle", "dev", 251000, manager1)
employee2 = Employee.new("jim", "dev", 255000, manager1)

# p manager1
# p employee1
# p employee2

p manager1.total_salary
p manager1.bonus(100)