using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using student_monitoring_dashboard.Data;

namespace student_monitoring_dashboard.Controllers
{
    [Produces("application/json")]
    [Route("api/AssignmentCriterias")]
    [ApiController]
    public class AssignmentCriteriaController : ControllerBase{
        private readonly DashContext _context;
        public AssignmentCriteriaController(DashContext context){
            _context = context;
        }

        [HttpGet("{yoloyeet}")]
        public async Task<ActionResult<List<Feedback>>> GetCriteriasfromAssignment(int yoloyeet){
            var query =
            from a in  _context.Assignment
            join f in _context.Feedback on a.AssignmentID equals f.AssignmentID
            join c in _context.Criteria on f.FeedbackID equals c.FeedBackID
            where a.AssignmentID == yoloyeet
            select c;
            return Ok(query);
        }
    }
}