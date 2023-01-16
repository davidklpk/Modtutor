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
    [Route("api/Assignments")]
    [ApiController]
    public class AssignmentController : ControllerBase
    {
        private readonly DashContext _context;

        public AssignmentController(DashContext context)
        {
            _context = context;
        }

        [HttpGet("{inputString}")]
        public async Task<ActionResult<List<Assignment>>> GetAssignment(string inputString)
        {
            var a = await _context.Assignment.Where(s => s.MadeInCourse == inputString).ToListAsync();
            if (a == null) { var b = await _context.Assignment.ToListAsync(); return Ok(b); }
            else { return Ok(a); }
        }
        [HttpGet("/api/Assignments/GetCriteriasfromAssignment/{inputInt}")]
        public async Task<ActionResult<List<Criteria>>> GetCriteriasfromAssignment(int inputInt)
        {
            var query =
            from a in _context.Assignment
            join f in _context.Feedback on a.AssignmentID equals f.AssignmentID
            join c in _context.Criteria on f.FeedbackID equals c.Grades
            where a.AssignmentID == inputInt
            select c;
            return Ok(query);
        }

        [HttpGet("/api/Assignments/GetFeedbacksFromAssignment/{inputInt}")]
        public async Task<ActionResult<List<Feedback>>> GetFeedbacksFromAssignment(int inputInt)
        {
            var a = await _context.Feedback.Where(s => s.AssignmentID == inputInt).ToListAsync();
            return Ok(a);
        }

        [HttpGet("/api/Assignments/getAssignmentName/{InputInt}")]
        public async Task<ActionResult<List<Assignment>>> getAssignmentName(int InputInt){
            var a = await _context.Assignment.Where(c => c.AssignmentID == InputInt).ToListAsync();
            return Ok(a);
        }
    }
}
