using System.ComponentModel.DataAnnotations;

public class Course{
    //properties
    [Key]
    public string CourseID { get; set; }
    public string CourseName { get; set; }
    
    //Relations
    // public List<Student> students;
    // public List<Teacher> teachers;
    // public List<CourseClass> courseclasses;
   
}
