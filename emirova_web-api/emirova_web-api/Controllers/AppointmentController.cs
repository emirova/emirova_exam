using emirova_web_api.Data;
using emirova_web_api.Models;
using Microsoft.AspNetCore.Mvc;

namespace emirova_web_api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AppointmentController : ControllerBase
    {
        public AppointmentController(HairdressDbContext dbContext)
        { 
            this.dbContext = dbContext;
        }

        public HairdressDbContext dbContext { get; }
        
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(dbContext.Appointments.ToList());

        }

        [HttpPost]
        public IActionResult Post(Appointment appointment)
        {
            dbContext.Appointments.Add(appointment);
            dbContext.SaveChanges();
            return Ok(dbContext.Appointments.ToList());
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var app = dbContext.Appointments.Find(id);
            if (app == null)
                return BadRequest("Appointment is not found");
            return Ok(app);
        }

        [HttpPut]
        public IActionResult Update(Appointment request)
        {
            var dbApp = dbContext.Appointments.Find(request.Id);
            if (dbApp == null)
                return BadRequest("Appointment is not found");

            dbApp.Date = request.Date;
            dbApp.Time = request.Time;
            dbApp.CustomerId = request.CustomerId;

            dbContext.SaveChanges();

            return Ok(dbContext.Appointments.ToList());
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var app = dbContext.Appointments.Find(id);
            if (app == null)
                return BadRequest("Appointment is not found");

            dbContext.Appointments.Remove(app);
            dbContext.SaveChanges();
            return Ok(dbContext.Appointments.ToList());
        }
    }
}