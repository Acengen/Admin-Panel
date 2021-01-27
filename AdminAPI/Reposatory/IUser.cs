using System.Collections.Generic;
using System.Threading.Tasks;
using AdminAPI.Helper;
using AdminAPI.Models;

namespace AdminAPI.Reposatory
{
    public interface IUser
    {
         Task<IEnumerable<User>> GetUsers(UserParams userParams);
         Task<IEnumerable<Order>> GetOrders(UserParams userParams);
         Task<Order> GetOrder(int id);
         Task<User> GetUser(int Id);
       
         Task<IEnumerable<Message>> GetMessages();
         Task<Message> GetMessage(int id);

    }
}