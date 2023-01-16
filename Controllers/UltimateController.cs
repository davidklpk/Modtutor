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
    [Route("api/Ultimates")]
    [ApiController]
    public class UltimateController : ControllerBase
    {
        private readonly DashContext _context;

        public UltimateController(DashContext context)
        {
            _context = context;
        }

        public List<Ultimate> Ultimates = new List<Ultimate>();
        [HttpGet("{InputString}")]
        public async Task<ActionResult<List<Assignment>>> GetUltimate(string InputString)
        {
            Ultimates.Clear();
            var queryStudent =
            from s in _context.Student
            join sc in _context.StudentClass on s.StudentID equals sc.StudentID
            join cc in _context.CourseClass on sc.ClassID equals cc.ClassID
            where cc.BelongsTo == InputString
            select s;
            int UID = 0;
            foreach (var gatherer in queryStudent)
            {
                int a = await calculateMSAVGAsync(gatherer.StudentID);
                var b = calculateFBFG(gatherer.StudentID);
                var c = calculateATP(gatherer.StudentID);
                var d = gatherer.FullName;
                var e = gatherer.StudentID;
                Ultimates.Add(new Ultimate { UltimateID = UID, StudentID = e, StudentName = d, MediaSiteAverageTime = a, FBFGrade = b, AttendancePercentage = c });
                UID++;
            }
            return Ok(Ultimates);
        }

        //calculate MediaSite Total Views
        public async Task<int> calculateMSAVGAsync(int SID1)
        {
            int countup = new int();
            var a = _context.MediaSite.Where(s => s.StudentID == SID1).ToList();
            foreach (var b in a)
            {
                countup += b.TotalViews;
            }
            return countup;
        }

        //calculate FeedBackFruits Grade
        public int calculateFBFG(int SID2)
        {
            int countup = new int();
            var queryCriteria =
            from cr in _context.Criteria
            join f in _context.Feedback on cr.Grades equals f.FeedbackID
            join s in _context.Student on f.StudentID equals s.StudentID
            where s.StudentID == SID2
            select cr;
            if (queryCriteria.Count() != 0)
            {
                foreach (var item in queryCriteria)
                {
                    countup += item.Grade ?? default(int);
                }
                int final = (countup / queryCriteria.Count());
                return final;
            }
            else { return 1; }
        }

        //calculate Attendance Percentage (in int)
        public int calculateATP(int SID3)
        {
            double countup1 = new double();
            double countup2 = new double();
            var queryWeek =
            from w in _context.Week
            join a in _context.Attendance on w.AttendanceID equals a.AAID
            join s in _context.Student on a.Has equals s.StudentID
            where s.StudentID == SID3
            select w;
            foreach (var item in queryWeek)
            {
                countup1 += item.WeekPresence;
                countup2 += item.WeekPossiblePresence;
            }
            int final = (int)((countup1 / countup2) * 100);
            if (final < 0) { return 1; }
            else { return final; }
        }
    }
}
