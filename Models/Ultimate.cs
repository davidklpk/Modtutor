using System.ComponentModel.DataAnnotations;

public class Ultimate{

    [Key]public int UltimateID { get; set; }
    public int StudentID { get; set; }
    public string StudentName { get; set; }
    public int MediaSiteAverageTime { get; set; }
    public int FBFGrade { get; set; }
    public int AttendancePercentage { get; set; }
}