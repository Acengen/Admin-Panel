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

        public async Task<Message> GetMessage(int id)
        {
            var msg = await _context.Messages.FirstOrDefaultAsync(m => m.Id == id);

            return msg;
        }

        public async Task<IEnumerable<Message>> GetMessages()
        {
            var msgs = await _context.Messages.ToListAsync();

            return msgs;
        }

        public async Task<Order> GetOrder(int id)
        {
            var order = await _context.Orders.FirstOrDefaultAsync(o => o.Id == id);
            return order;
        }

        public async Task<IEnumerable<Order>> GetOrders(UserParams userParams)
        {
            var orders = await _context.Orders.ToListAsync();
            
            if(userParams.discount) {
                var ordersWithDiscount = _context.Orders.Where(o => o.Price > 40);
                return ordersWithDiscount;
            }

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
            //filtering users by name if they contain any char
            if(userParams.name != null) {
                var usertoret = _context.Users.Where(u => u.Name.Contains(userParams.name));
                return usertoret;
            }
            return users;
        }

        
    }
}