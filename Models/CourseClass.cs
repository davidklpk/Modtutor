using System.ComponentModel.DataAnnotations;

public class CourseClass
{
    [Key] public int ClassID { get; set; }
    public string ClassName { get; set; }
}