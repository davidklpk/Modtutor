using System.ComponentModel.DataAnnotations;

public class Course{
    //properties
    [Key]
    public string CourseID { get; set; }
    public string CourseName { get; set; }

    public DateTime? LastClicked { get; set; }
   
}
