using System.ComponentModel.DataAnnotations;

public class Feedback{
    //Properties
    [Key]public int FeedbackID { get; set; }
    public bool ReadInstructions { get; set; }
    public bool HandedIn { get; set; }
    public bool FinishedFeedback { get; set; }
    public bool ReadFeedback { get; set; }
    public int TimeSpent { get; set; }
    public double OverallGrade { get; set; }
    public int TotalReviewComments { get; set; }
    public bool TypeofFeedback { get; set; }

    //relations
    public List<Criteria> RatingBasedOn;
    public Assignment IsGivenOn;

}