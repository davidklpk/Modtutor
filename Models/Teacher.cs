public class Teacher: User{
    //properties
    public int TeacherID { get; set; }

    //relations
    Student givesGradesTo;
    Course teaches;
    CourseClassGroup canSee;
}