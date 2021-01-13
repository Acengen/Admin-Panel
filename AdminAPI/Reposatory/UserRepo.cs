using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AdminAPI.Data;
using AdminAPI.Helper;
using AdminAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace AdminAPI.Reposatory
{
    public class UserRepo : IUser
    {
        private readonly MyContext _context;

        public UserRepo(MyContext context)
        {
            _context = context;

        }

        

      

        public async Task<IEnumerable<Order>> GetOrders()
        {
            var orders = await _context.Orders.ToListAsync();
            
            return orders;
        }

        public async Task<User> GetUser(int Id)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Id == Id);

            return user;
        }

        public async Task<IEnumerable<User>> GetUsers(UserParams userParams)
        {
            var users = await _context.Users.ToListAsync();

            if(userParams.gender != null) {
                var ord = _context.Users.Where(u => u.Gender == userParams.gender);
                return ord;
            }

            return users;
        }

        
    }
}