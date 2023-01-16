using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class CourseClass
{
    [Key] public int ClassID { get; set; }
    public string ClassName { get; set; }
    [ForeignKey("Teacher")]public int Teaches { get; set; }
    [ForeignKey("Course")]public string BelongsTo { get; set; }
}