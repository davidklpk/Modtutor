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
    [Route("api/Feedbacks")]
    [ApiController]
    public class FeedbackController : ControllerBase
    {
        private readonly DashContext _context;

        public FeedbackController(DashContext context)
        {
            _context = context;
        }
        
        [HttpGet("{InputInt}")]
        public async Task<ActionResult<List<Feedback>>> GetFeedbacks(int InputInt)
        {
            var a = await _context.Feedback.Where(s => s.StudentID == InputInt).ToListAsync();
            return Ok(a);
        }
        
    }
}
