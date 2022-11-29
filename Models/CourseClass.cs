using System.ComponentModel.DataAnnotations;

public class CourseClass{
    //properties
    [Key]public int ClassID { get; set; }
    public string ClassName { get; set; }

    //Relations
    public List<Assignment> IsAssigned;
}