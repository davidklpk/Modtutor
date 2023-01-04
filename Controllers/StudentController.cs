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
    [Route("api/Students")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private readonly DashContext _context;

        public StudentController(DashContext context)
        {
            _context = context;
        }

        // [HttpGet]
        // public async Task<ActionResult<List<Student>>> GetStudent()
        // {
        //     return Ok(await _context.Student.ToListAsync());
        // }

        [HttpGet("{yoloyeet}")]
        public async Task<ActionResult<List<Student>>> GetStudents(int yoloyeet)
        {
            System.Console.WriteLine("aaaaa");
           var a = await _context.Student.Where(s => s.StudentID == yoloyeet).ToListAsync();
           return Ok(a);
        }

    }
}