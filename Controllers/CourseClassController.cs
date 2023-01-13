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
    [Route("api/CourseClasses")]
    [ApiController]
    public class CourseClassController : ControllerBase
    {
        private readonly DashContext _context;

        public CourseClassController(DashContext context)
        {
            _context = context;
        }

        [HttpGet("{InputString}")]
        public async Task<ActionResult<List<CourseClass>>> GetCourseClasses(string InputString)
        {
            var a = await _context.CourseClass.Where(s => s.BelongsTo == InputString).ToListAsync();
            if (a == null) { var b = await _context.CourseClass.ToListAsync(); return Ok(b); }
            else { return Ok(a); }
        }

    }
}