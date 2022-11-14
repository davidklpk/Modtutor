public class Course{
    //properties
    [Key]public int CourseID { get; set; }
    public string CourseName { get; set; }
    
    //Relations
    public List<Student> students;
    public List<Teacher> teachers;
    public List<CourseClass> courseclasses;
    public List<Feedback> feedbacks { get; set; }
}