using System.ComponentModel.DataAnnotations;

namespace emirova_web_api.Models
{
    public class Customer
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }

        public string Master { get; set; } = string.Empty;
        [Required]
        public string ServiceType { get; set; }
    }
}
