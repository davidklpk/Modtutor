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
    [Route("api/Weeks")]
    [ApiController]
    public class WeekController : ControllerBase
    {
        private readonly DashContext _context;

        public WeekController(DashContext context)
        {
            _context = context;
        }
        
        [HttpGet("{yoloyeet}")]
        public async Task<ActionResult<List<Week>>> GetWeek(int yoloyeet)
        {
            var query =
            from w in _context.Week
            join at in _context.Attendance on w.AttendanceID equals at.AAID
            join s in _context.Student on at.Has equals s.StudentID
            where s.StudentID == yoloyeet
            select w;
            return Ok(query);
        }

        [HttpGet("/api/Weeks/getWeeksOnCourse/{yeet}")]
        public async Task<ActionResult<List<Attendance>>> getWeeksOnCourse(string yeet){
            var query =
            from w in _context.Week
            join a in _context.Attendance on w.AttendanceID equals a.AAID
            join s in _context.Student on a.Has equals s.StudentID
            join sc in _context.StudentClass on s.StudentID equals sc.StudentID
            join cc in _context.CourseClass on sc.ClassID equals cc.ClassID
            join c in _context.Course on cc.BelongsTo equals c.CourseID
            where c.CourseID == yeet
            select w;
            return Ok(query);
        }
        
    }
}
