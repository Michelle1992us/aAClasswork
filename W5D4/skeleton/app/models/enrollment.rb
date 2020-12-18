class Enrollment < ApplicationRecord
    belongs_to :user, #keep singular so doesn't conflict w/ table name
        primary_key: :id,
        foreign_key: :student_id,
        class_name: :User #rememebr to capitalize
    

    belongs_to :course,
        primary_key: :id,
        foreign_key: :course_id,
        class_name: :Course
    


end



# Open the model, app/models/enrollment.rb. Add the associations inside the currently empty class. You will need associations for User and Course.

# After you are done adding the associations, you should be able to execute Enrollment.first.user and Enrollment.first.course in the rails console. These commands should return the associated user and course for the first enrollment.