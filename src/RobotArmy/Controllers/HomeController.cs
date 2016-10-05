using Microsoft.AspNetCore.Mvc;
using Npgsql;
using RobotArmy.Data;
using RobotArmy.Models;
using System;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace RobotArmy.Controllers
{
    public class HomeController : Controller
    {
        private readonly ApplicationDbContext _context;

        public HomeController(ApplicationDbContext context)
        {
            _context = context;
        }


        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Dashboard()
        {
            return View();
        }

        public IActionResult About()
        {
            return View();
        }
    }
}
