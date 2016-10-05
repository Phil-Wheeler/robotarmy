using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RobotArmy.Data;
using RobotArmy.Models;
using System.Net;

namespace RobotArmy.Controllers
{
    [Produces("application/json")]
    [Route("api/Armies")]
    public class ArmiesController : Controller
    {
        private readonly ApplicationDbContext _context;

        public ArmiesController(ApplicationDbContext Context)
        {
            _context = Context;
        }


        // GET: api/Training
        [HttpGet]
        public IEnumerable<Army> Get()
        {
            return _context.Armies;
        }

        // GET: api/Training/5
        [HttpGet("{id}")]
        public Army Get(Guid id)
        {
            return _context.Armies
                .Include(a => a.Robots)
                .FirstOrDefault(a => a.Id == id);
        }

        // POST: api/Training
        [HttpPost]
        public Army Post(Army value)
        {
            value.Owner = Guid.Parse(User.Identity.GetUserId());
            value.Robots = new List<Robot>();

            _context.Armies.Add(value);
            _context.SaveChanges();

            //HttpContext.Response.StatusCode = (int) HttpStatusCode.NoContent;
            return value;
        }

        // PUT: api/Training/5
        [HttpPut("{id}")]
        public void Put(Guid id, [FromBody]Army value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(Guid id)
        {
        }

    }
}