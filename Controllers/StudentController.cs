using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using student_monitoring_dashboard.Data;

namespace student_monitoring_dashboard.Controllers
{
    [Produces("application/json")]
    [Route("api/Students")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private readonly DashContext _context;

        public StudentController(DashContext context)
        {
            _context = context;
        }

        [HttpGet("{InputInt}")]
        public async Task<ActionResult<List<Student>>> GetStudents(int InputInt)
        {
           var a = await _context.Student.Where(s => s.StudentID == InputInt).ToListAsync();
           return Ok(a);
        }

        [HttpGet("/api/Students/GetAssignmentsFromStudent/{InputInt}")]
        public async Task<ActionResult<List<Assignment>>> GetAssignmentsFromStudent(int InputInt){
            var query =
            from s in _context.Student
            join sc in _context.StudentClass on s.StudentID equals sc.StudentID
            join cc in _context.CourseClass on sc.ClassID equals cc.ClassID
            join c in _context.Course on cc.BelongsTo equals c.CourseID
            join a in _context.Assignment on c.CourseID equals a.MadeInCourse
            where s.StudentID == InputInt
            select a;
            return Ok(query);
        }

    }
}