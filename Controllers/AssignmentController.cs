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
        
        [HttpGet]
        public async Task<ActionResult<List<Course>>> GetAssignment()
        {
            return Ok(await _context.Assignment.ToListAsync());
        }
        /*public IEnumerable<Assignment> GetAssignment()
        {
            return _context.Assignment;
        }*/
    }
}
