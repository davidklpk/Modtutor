using System.ComponentModel.DataAnnotations;

public class Criteria
{
    [Key] public int CriteriaID { get; set; }
    public int FeedBackID { get; set;}
    public string CriteriaName { get; set; }
    public int? Grade { get; set; }
    public string? KindofFeedback { get; set; }
    public string? Comment { get; set; }
}