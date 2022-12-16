using emirova_web_api.Models;
using Microsoft.EntityFrameworkCore;

namespace emirova_web_api.Data
{
    public class HairdressDbContext : DbContext
    {
        public HairdressDbContext(DbContextOptions<HairdressDbContext> options) : base(options)
        {

        }

        public DbSet<Customer> Customers { get; set; }

        public DbSet<Appointment> Appointments { get; set; }
    }
}
