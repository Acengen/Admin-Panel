using System.ComponentModel.DataAnnotations;

namespace AdminAPI.Dtos
{
    public class UserUpdateDto
    {
        [Required]
        public string Name { get; set; }

        [Required]
        public string Street { get; set; }

        [Required]
        public string City { get; set; }

        [Required]
        public string Gender { get; set; }
        
    }
}