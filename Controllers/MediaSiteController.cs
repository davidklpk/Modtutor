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
    [Route("api/MediaSites")]
    [ApiController]
    public class MediaSiteController : ControllerBase
    {
        private readonly DashContext _context;

        public MediaSiteController(DashContext context)
        {
            _context = context;
        }
        [HttpGet("{yoloyeet}")]
        public async Task<ActionResult<List<MediaSite>>> GetMediaSite(int yoloyeet)
        {
            var a = await _context.MediaSite.Where(s => s.StudentID == yoloyeet).ToListAsync();
            return Ok(a);
        }

        [HttpGet("/api/MediaSites/getMediaSitesOnCourse/{yeet}")]
         public async Task<ActionResult<List<Feedback>>> getMediaSitesOnCourse(string yeet){
            var query =
            from m in _context.MediaSite
            join s in _context.Student on m.StudentID equals s.StudentID
            join sc in _context.StudentClass on s.StudentID equals sc.StudentID
            join cc in _context.CourseClass on sc.ClassID equals cc.ClassID
            join c in _context.Course on cc.BelongsTo equals c.CourseID
            where c.CourseID == yeet
            select m;
            return Ok(query);
         }
    }
}
