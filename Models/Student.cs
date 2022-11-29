using System.ComponentModel.DataAnnotations;

public class Student{
   //properties
    [Key]public int StudentID { get; set; }
    public string Fullname { get; set; }
    public string Email { get; set; }
    public string Password { get; set; }

    //relations 
    public List<Feedback> Gives;
    public MediaSite LooksAt;
 }