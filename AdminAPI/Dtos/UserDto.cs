using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using AdminAPI.Models;

namespace AdminAPI.Dtos
{
    public class UserDto
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Street { get; set; }

        [Required]
        public string City { get; set; }

        [Required]
        public string Gender { get; set; }

        [Required]
        public string ProductName { get; set; }
        public int ProductPrice { get; set; }


    }
}