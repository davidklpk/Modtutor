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
        
        [HttpGet("{InputInt}")]
        public async Task<ActionResult<List<Week>>> GetWeek(int InputInt)
        {
            var query =
            from w in _context.Week
            join at in _context.Attendance on w.AttendanceID equals at.AAID
            join s in _context.Student on at.Has equals s.StudentID
            where s.StudentID == InputInt
            select w;
            return Ok(query);
        }
    }
}
