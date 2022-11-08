public class Reviewer{
    //properties
    public int StudentID { get; set; }
    public int RatedByStudentID { get; set; }
    public int TotalReviewComments { get; set; }

    //Relations
    Feedback Reads;
    
}