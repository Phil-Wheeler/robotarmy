using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace RobotArmy.Models
{
    public class Exercise
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }
        public string Name { get; set; }
        public int Sequence { get; set; }
        public int PointValue { get; set; }
        public int PointThreshold { get; set; }
    }

    public class Training
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public ApplicationUser Owner { get; set; }

        public Exercise Task  { get; set; }
        public DateTime Completed { get; set; }
    }
}
