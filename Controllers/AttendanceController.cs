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
        
        [HttpGet("{InputInt}")]
        public async Task<ActionResult<List<Attendance>>> GetAttendance(int InputInt)
        {
            var a = await _context.Attendance.Where(s => s.Has == InputInt).ToListAsync();
            return Ok(a);
        }
    }
}
