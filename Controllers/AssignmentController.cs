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
        
        [HttpGet("{yoloyeet}")]
        public async Task<ActionResult<List<Assignment>>> GetAssignment(string yoloyeet)
        {
            var a = await _context.Assignment.Where(s => s.MadeInCourse == yoloyeet).ToListAsync();
            if (a == null)
            {
                var b = await _context.Assignment.ToListAsync();
                System.Console.WriteLine("BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBbbb");
                return Ok(b);
            }
            else
            {
                return Ok(a);
            }
        }

        

        // [HttpGet]
        // public async Task<ActionResult<Assignment>> GetSpecificAssignment(int ID)
        // {
        //     var a = await _context.Assignment.FindAsync(ID);
        //     return Ok(a);
        // }
        /*public IEnumerable<Assignment> GetAssignment()
        {
            return _context.Assignment;
        }*/
    }
}
