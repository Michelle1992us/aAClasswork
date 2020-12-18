class Course < ApplicationRecord
    has_many(:enrollments,
        {primary_key: :id,
        foreign_key: :course_id,
        class_name: :Enrollment})

    has_many :enrolled_students,
        through: :enrollments,
        source: :user    
    
    belongs_to :prerequisite,
        primary_key: :id,
        foreign_key: :prereq_id,
        class_name: :Course, optional: true

    belongs_to :instructor,
        primary_key: :id,
        foreign_key: :instructor_id,
        class_name: :User

end


# Finally, add an instructor association to Course. This will point to a User object. Note that Course is now related to User in two ways: instructor and enrolled_students.