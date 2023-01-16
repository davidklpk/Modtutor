using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class Criteria
{
    [Key] public int CriteriaID { get; set; }
    [ForeignKey("Feedback")]public int Grades { get; set;}
    public string CriteriaName { get; set; }
    public int? Grade { get; set; }
    public string? KindofFeedback { get; set; }
    public string? Comment { get; set; }
}