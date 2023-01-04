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
        /*public IEnumerable<Assignment> GetAssignment()
        {
            return _context.Assignment;
        }*/
    }
}
