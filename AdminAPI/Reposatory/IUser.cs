using System.Collections.Generic;
using System.Threading.Tasks;
using AdminAPI.Helper;
using AdminAPI.Models;

namespace AdminAPI.Reposatory
{
    public interface IUser
    {
         Task<IEnumerable<User>> GetUsers(UserParams userParams);
         Task<IEnumerable<Order>> GetOrders();
         Task<User> GetUser(int Id);
       
    }
}