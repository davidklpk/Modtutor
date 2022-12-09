using System.ComponentModel.DataAnnotations.Schema;

public class Week
{
    public int WeekID { get; set; }
    public int NumberOfWeek { get; set; }
    public int WeekPresence { get; set; }
    public int WeekPossiblePresence { get; set; }
    [ForeignKey("Attendance")]public int AttendanceID { get; set; }
}