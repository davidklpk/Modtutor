using System.ComponentModel.DataAnnotations;

public class Assignment{
    //properties
    [Key]public int assignmentID { get; set; }
    public string assignmentName { get; set; }

    public DateTime HandedInDate { get; set; }

    //Relations
    //unlucky
}