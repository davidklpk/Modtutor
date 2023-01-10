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
    [Route("api/Attendances")]
    [ApiController]
    public class AttendanceController : ControllerBase
    {
        private readonly DashContext _context;

        public AttendanceController(DashContext context)
        {
            _context = context;
        }
        
        [HttpGet("{yoloyeet}")]
        public async Task<ActionResult<List<Attendance>>> GetAttendance(int yoloyeet)
        {
            var a = await _context.Attendance.Where(s => s.Has == yoloyeet).ToListAsync();
            return Ok(a);
        }

        

        [HttpGet("/api/Attendances/getAttendancesOnCourse/{yeet}")]
        public async Task<ActionResult<List<Attendance>>> getAttendancesOnCourse(string yeet){
            var query =
            from a in _context.Attendance
            join s in _context.Student on a.Has equals s.StudentID
            join sc in _context.StudentClass on s.StudentID equals sc.StudentID
            join cc in _context.CourseClass on sc.ClassID equals cc.ClassID
            join c in _context.Course on cc.BelongsTo equals c.CourseID
            where c.CourseID == yeet
            select a;
            return Ok(query);
        }
        /*public IEnumerable<Assignment> GetAssignment()
        {
            return _context.Assignment;
        }*/
    }
}
