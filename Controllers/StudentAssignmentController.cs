using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using student_monitoring_dashboard.Data;

namespace student_monitoring_dashboard.Controllers
{
    [Produces("application/json")]
    [Route("api/StudentAssignments")]
    [ApiController]
    public class StudentAssignmentController : ControllerBase{
        private readonly DashContext _context;
        public StudentAssignmentController(DashContext context){
            _context = context;
        }

        [HttpGet("{yoloyeet}")]
        public async Task<ActionResult<List<Feedback>>> GetAssignmentsFromStudent(int yoloyeet){
            var query =
            from s in _context.Student
            join sc in _context.StudentClass on s.StudentID equals sc.StudentID
            join cc in _context.CourseClass on sc.ClassID equals cc.ClassID
            join c in _context.Course on cc.BelongsTo equals c.CourseID
            join a in _context.Assignment on c.CourseID equals a.MadeInCourse
            where s.StudentID == yoloyeet
            select a;
            return Ok(query);
        }
    }
}