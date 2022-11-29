public class Teacher{
    //properties
    public int TeacherID { get; set; }

    public string Fullname { get; set; }
    public string Email { get; set; }
    public string Password { get; set; }

    //relations
    public List<Assignment> Creates;
}