using AdminAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace AdminAPI.Data
{
    public class MyContext : DbContext
    {
        public MyContext(DbContextOptions<MyContext> options):base(options)
        {
            
        }

        public DbSet<User> Users {get;set;}
        public DbSet<Order> Orders {get;set;}
    }
}