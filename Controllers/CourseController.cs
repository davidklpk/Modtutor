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
        
        // public async Task<ActionResult<IEnumerable<Course>>> GetCourses()
        // {
        //     return Ok(await _context.Courses.ToListAsync());

        // }
        [HttpGet]
        public async Task<ActionResult<List<Course>>> GetCourse()
        {
            return Ok(await _context.Course.ToListAsync());
        }

        // [HttpGet("{string}")]
        // public async Task<ActionResult<List<CourseClass>>> Get(string id){
        //     // var a = await _context.CourseClass.Where(s => s.BelongsTo == id).ToListAsync();
        //     // if (a == null){
        //     //     return Ok(await _context.CourseClass.ToListAsync());
        //     // }
        //     // else return Ok(a);
        //     //var a = _context.CourseClass.Where(s => s.BelongsTo == "ITD-HMVT22-K70_2022_VT").ToListAsync();
        //     //return Ok( await _context.CourseClass.Where(s => s.BelongsTo == url).ToListAsync());
        //     var a = await _context.CourseClass.Where(s => s.BelongsTo == id).ToListAsync();
        //     return Ok(a);
        // }
        
        /*
        public IEnumerable<Course> GetCourse()
        {
            return _context.Course;
        }*/

    }
}
