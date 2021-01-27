using System.ComponentModel.DataAnnotations;

namespace AdminAPI.Dtos
{
    public class OrderDTo
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }
        [Required]
        public int Price { get; set; }

        public bool Discount {get;set;}

        public int DiscountPrice{get;set;}


    }
}