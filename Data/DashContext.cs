using Microsoft.EntityFrameworkCore;

namespace student_monitoring_dashboard.Data{
    public class DashContext : DbContext
    {
        public DashContext(DbContextOptions<DashContext> options) : base(options) {}

        //public DbSet<Course> CoursesList => Set<Course>();
        public DbSet<Assignment> Assignment {get;set;}
        public DbSet<Course> Course {get;set;}
        public DbSet<CourseClass> CourseClass {get;set;}
        public DbSet<Criteria> Criteria {get;set;}
        //public DbSet<Feedback> Feedback {get;set;}
        public DbSet<MediaSite> MediaSite {get;set;}
        public DbSet<Student> Student {get;set;}
        public DbSet<Teacher> Teacher {get;set;}
    }
}