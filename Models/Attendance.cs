using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class Attendance
{
    [Key]public int AAID { get; set; }
    [ForeignKey("Student")]public int Has { get; set; }
    public int StartYear { get; set; }
    public DateTime? LastActivityDate { get; set; }
}