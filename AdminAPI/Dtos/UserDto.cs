using System.Collections.Generic;
using AdminAPI.Models;

namespace AdminAPI.Dtos
{
    public class UserDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Street { get; set; }
        public string City { get; set; }
        public string Gender { get; set; }
        public string ProductName { get; set; }
        public int ProductPrice { get; set; }   
        
    }
}