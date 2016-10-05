using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Npgsql.EntityFrameworkCore.PostgreSQL;
using RobotArmy.Models;

namespace RobotArmy.Data
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<Robot> Robots { get; set; }
        public DbSet<Army> Armies { get; set; }
        public DbSet<Rank> Ranks { get; set; }
        public DbSet<Exercise> Exercises { get; set; }
        public DbSet<Training> Training { get; set; }



        protected override void OnModelCreating(ModelBuilder builder)
        {
            //builder.Entity<Fixture>().HasPostgresExtension("uuid-ossp");
            builder.HasPostgresExtension("uuid-ossp");

            base.OnModelCreating(builder);
            // Customize the ASP.NET Identity model and override the defaults if needed.
            // For example, you can rename the ASP.NET Identity table names and more.
            // Add your customizations after calling base.OnModelCreating(builder);
        }
    }
}
