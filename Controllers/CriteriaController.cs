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
    [Route("api/Criterias")]
    [ApiController]
    public class CriteriaController : ControllerBase
    {   
        private readonly DashContext _context;

        public CriteriaController(DashContext context)
        {
            _context = context;
        }

        [HttpGet("{InputInt}")]
        public async Task<ActionResult<List<Criteria>>> GetCriteria(int InputInt)
        {
            var query =
            from c in _context.Criteria
            join f in _context.Feedback on c.Grades equals f.FeedbackID
            join s in _context.Student on f.StudentID equals s.StudentID
            where s.StudentID == InputInt
            select c;
            return Ok(query);
        }
    }
}
