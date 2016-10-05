using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace RobotArmy.Models
{
    public class Army
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }
        public string Name { get; set; }

        public Guid Owner { get; set; }

        public virtual ICollection<Robot> Robots { get; set; }
    }

    public class Robot
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }
        public string Serial { get; set; }
        public string Name { get; set; }
    }

    public class Rank
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Insignia { get; set; }
    }
}
