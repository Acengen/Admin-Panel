using System.ComponentModel.DataAnnotations;

namespace AdminAPI.Dtos
{
    public class UserUpdateDto
    {
        [Required]
        [StringLength(255,MinimumLength=2,ErrorMessage="'NAME' must have at least 2 chars")]
        public string Name { get; set; }
        public string Street { get; set; }
        public string City { get; set; }
        public string Gender { get; set; }
        
    }
}