using emirova_web_api.Data;
using emirova_web_api.Models;
using Microsoft.AspNetCore.Mvc;

namespace emirova_web_api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CustomerController : ControllerBase
    {
        public CustomerController(HairdressDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public HairdressDbContext dbContext { get; }
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(dbContext.Customers.ToList());

        }

        [HttpPost]
        public IActionResult Post(Customer customer)
        {
            dbContext.Customers.Add(customer);
            dbContext.SaveChanges();
            return Ok(dbContext.Customers.ToList());
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var cus = dbContext.Customers.Find(id);
            if (cus == null)
                return BadRequest("Customer is not found");
            return Ok(cus);
        }

        [HttpPut]
        public IActionResult Update(Customer request)
        {
            var dbCus = dbContext.Customers.Find(request.Id);
            if (dbCus == null)
                return BadRequest("Customer is not found");

            dbCus.Name = request.Name;
            dbCus.Master = request.Master;
            dbCus.ServiceType = request.ServiceType;

            dbContext.SaveChanges();

            return Ok(dbContext.Customers.ToList());
        }

        /// <summary>
        //// Deletes a specific TodoItem.
        /// </summary>
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var cus = dbContext.Customers.Find(id);
            if (cus == null)
                return BadRequest("Customer is not found");

            dbContext.Customers.Remove(cus);
            dbContext.SaveChanges();
            return Ok(dbContext.Customers.ToList());
        }
    }
}