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
        
        [HttpGet("{InputInt}")]
        public async Task<ActionResult<List<MediaSite>>> GetMediaSite(int InputInt)
        {
            var a = await _context.MediaSite.Where(s => s.StudentID == InputInt).ToListAsync();
            return Ok(a);
        }
    }
}
