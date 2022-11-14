public class Feedback{
    //Properties
    [Key]public int FeedbackID { get; set; }
    public boolean ReadInstructions { get; set; }
    public boolean HandedIn { get; set; }
    public boolean FinishedFeedback { get; set; }
    public boolean ReadFeedback { get; set; }
    public int TimeSpent { get; set; }
    public double OverallGrade { get; set; }
    public int TotalReviewComments { get; set; }
    public boolean TypeofFeedback { get; set; }

    //relations
    public List<Criteria> RatingBasedOn;
    public Assignment placeholder;

}