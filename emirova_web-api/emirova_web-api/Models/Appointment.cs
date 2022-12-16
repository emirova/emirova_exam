using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace emirova_web_api.Models
{
    public class Appointment
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public string Date { get; set; }
        public string Time { get; set; }
        [ForeignKey("Customer")]
        public int CustomerId { get; set; }
    }
}
