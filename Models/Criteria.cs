public class Criteria{
    [Key]public int CriteriaID { get; set; }
    public string CriteriaName { get; set; }
    public double Grade { get; set; }
    public string KindOfFeedback { get; set; }
    public string Comment { get; set; }

    //relations
    //yikes
}