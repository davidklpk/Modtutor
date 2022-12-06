using System.ComponentModel.DataAnnotations;

public class Assignment
{
    [Key] public int AssignmentID { get; set; }
    public string AssignmentName { get; set; }
    //public DateTime? HandedInDate { get; set;}
}