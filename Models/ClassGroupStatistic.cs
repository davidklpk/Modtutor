public class ClassGroupStatistic{
    //properties
    public double AttendanceRate { get; set; }
    public double SubmissionRate { get; set; }
    public double ReviewReadDate { get; set; }
    public double ReviewGivenDate { get; set; }
    
    //relations
    PersonalStatistic DividesInto;
    CourseClassGroup GivesInfoOn;
}