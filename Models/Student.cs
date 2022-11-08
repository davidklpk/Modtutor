 public class Student : User {
   //properties
    public int StudentID { get; set; }
    public string StudentEmail { get; set; }

    //relations s
    Course takes;
    CourseClassGroup Isin;
    Feedback gives;
    Reviewer receivesFeedbackAs;
 }