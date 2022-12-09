using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

[Keyless]
public class StudentClass
{
    [ForeignKey("Student")]public int StudentID { get; set; }
    [ForeignKey("CourseClass")]public int ClassID { get; set; }
}   