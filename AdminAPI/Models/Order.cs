namespace AdminAPI.Models
{
    public class Order
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Price { get; set; }

        public bool Discount {get;set;}

        public int DiscountPrice{get;set;}
        
    }
}