namespace AdminAPI.Dtos
{
    public class OrderToUpdateDto
    {
         public string Name { get; set; }
         public int Price { get; set; }

         public bool Discount {get;set;}

        public int DiscountPrice{get;set;}
    }
}