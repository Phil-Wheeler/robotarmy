using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RobotArmy.Data;
using RobotArmy.Models;

namespace RobotArmy.Controllers
{
    [Produces("application/json")]
    [Route("api/Training")]
    public class TrainingController : Controller
    {
        private readonly ApplicationDbContext _context;

        public TrainingController(ApplicationDbContext Context)
        {
            _context = Context;
        }


        // GET: api/Training
        [HttpGet]
        public IEnumerable<Training> Get()
        {
            return _context.Training;
        }

        // GET: api/Training/5
        [HttpGet("{id}", Name = "Get")]
        public Training Get(int id)
        {
            return _context.Training.FirstOrDefault(t => t.Id == id);
        }
        
        // POST: api/Training
        [HttpPost]
        public void Post([FromBody]Training value)
        {
            //
        }
        
        // PUT: api/Training/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]Training value)
        {
        }
        
        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
