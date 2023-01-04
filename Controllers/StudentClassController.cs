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
    [Route("api/StudentClasses")]
    [ApiController]
    public class StudentClassController : ControllerBase
    {
        private readonly DashContext _context;

        public StudentClassController(DashContext context)
        {
            _context = context;
        }

        [HttpGet("{yoloyeet}")]
        public async Task<ActionResult<List<StudentClass>>> GetStudentClasses(string yoloyeet)
        {
            var query = 
            from s in _context.Student
            join sc in _context.StudentClass on s.StudentID equals sc.StudentID
            join cc in _context.CourseClass on sc.ClassID equals cc.ClassID
            where cc.BelongsTo == yoloyeet 
            select s;
            return Ok(query);
        }
        /*public IEnumerable<Assignment> GetAssignment()
        {
            return _context.Assignment;
        }*/
    }
}
