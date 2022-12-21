using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class Assignment
{
    [Key] public int AssignmentID { get; set; }
    public string AssignmentName { get; set; }
    public DateTime HandedInDate { get; set; }
    [ForeignKey("CourseClass")]public int MadeIn { get; set; }

    [ForeignKey("Course")]public string MadeInCourse { get; set; }
}