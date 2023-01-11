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
    [Route("api/Courses")]
    [ApiController]
    public class CourseController : ControllerBase
    {
        private readonly DashContext _context;

        public CourseController(DashContext context)
        {
            _context = context;
        }
        
        [HttpGet]
        public async Task<ActionResult<List<Course>>> GetCourse()
        {
            return Ok(await _context.Course.ToListAsync());
        }

        [HttpGet("/api/Courses/getCourseName/{InputString}")]
        public async Task<ActionResult<List<Course>>> getCourseName(string InputString){
            var a = await _context.Course.Where(c => c.CourseID == InputString).ToListAsync();
            return Ok(a);
        }

    }
}
