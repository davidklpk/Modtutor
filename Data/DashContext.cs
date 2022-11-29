using Microsoft.EntityFrameworkCore;


public class DashContext : DbContext{
    
    public DashContext(DbContextOptions<DashContext> options)
        : base(options)
    {}

    public DbSet<Assignment> Assignments {get;set;}
    public DbSet<Course> Courses {get;set;}
    public DbSet<CourseClass> CourseClasses {get;set;}
    public DbSet<Criteria> Criterias {get;set;}
    public DbSet<Feedback> Feedbacks {get;set;}
    public DbSet<MediaSite> MediaSites {get;set;}
    public DbSet<Student> Students {get;set;}
    public DbSet<Teacher> Teachers {get;set;}




}