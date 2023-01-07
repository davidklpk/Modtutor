using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using student_monitoring_dashboard.Data;

namespace student_monitoring_dashboard.Controllers
{
    [Produces("application/json")]
    [Route("api/FBFAssignment")]
    [ApiController]
    public class FBFAssignmentController : ControllerBase{
        private readonly DashContext _context;
        public FBFAssignmentController(DashContext context){
            _context = context;
        }

        [HttpGet("{yoloyeet}")]
        public async Task<ActionResult<List<Feedback>>> GetFeedbacksFromAssignment(int yoloyeet){
            var a = await _context.Feedback.Where(s => s.AssignmentID == yoloyeet).ToListAsync();
            return Ok(a);
        }
    }
}