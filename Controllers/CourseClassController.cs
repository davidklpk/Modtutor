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

        // [HttpGet]
        // public async Task<ActionResult<IEnumerable<Course>>> GetCourseClasses()
        // {
        //     return Ok(await _context.CourseClass.ToListAsync());

        // }
        // [HttpGet("{string}")]
        // public async Task<ActionResult<List<CourseClass>>> GetCourseClasses(string url){
        //     System.Console.WriteLine(url);
        //     var a = await _context.CourseClass.Where(s => s.BelongsTo == "ITD-HMVT22-K70_2022_VT").ToListAsync();
        //     if (a == null){
        //         return Ok(await _context.CourseClass.ToListAsync());
        //     }
        //     else return Ok(a);
        //     //var a = _context.CourseClass.Where(s => s.BelongsTo == "ITD-HMVT22-K70_2022_VT").ToListAsync();
        //     //return Ok( await _context.CourseClass.Where(s => s.BelongsTo == url).ToListAsync());
        // }

        // [HttpGet]
        // public async Task<ActionResult<List<CourseClass>>> GetCourseClasses(string yeet){
        //     // var a = await _context.CourseClass.Where(s => s.BelongsTo == id).ToListAsync();
        //     // if (a == null){
        //     //     return Ok(await _context.CourseClass.ToListAsync());
        //     // }
        //     // else return Ok(a);
        //     //var a = _context.CourseClass.Where(s => s.BelongsTo == "ITD-HMVT22-K70_2022_VT").ToListAsync();
        //     //return Ok( await _context.CourseClass.Where(s => s.BelongsTo == url).ToListAsync());
        //     var a = _context.CourseClass.Where(s => s.BelongsTo == yeet).ToListAsync();
        //     var b = _context.CourseClass.ToListAsync();
        //     if (await a == null){
        //         System.Console.WriteLine("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
        //         return Ok(await b);
        //     }
        //     else{
        //     return Ok(await a);
        //     }
        // }

        // [HttpGet("{CourseIDee}")]
        // public async Task<ActionResult<List<CourseClass>>> GetCourseClasses(string CourseIDee){
        //     var a = await _context.CourseClass.Where(s => s.BelongsTo == CourseIDee).ToListAsync();
        //     return Ok(a);
        // }

        [HttpGet("{yoloyeet}")]
        public async Task<ActionResult<List<CourseClass>>> GetCourseClasses(string yoloyeet)
        {
            var a = await _context.CourseClass.Where(s => s.BelongsTo == yoloyeet).ToListAsync();
            if (a == null)
            {
                var b = await _context.CourseClass.ToListAsync();
                System.Console.WriteLine("BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBbbb");
                return Ok(b);
            }
            else
            {
                return Ok(a);
            }
        }

    }
}
