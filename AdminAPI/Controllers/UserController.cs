using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AdminAPI.Data;
using AdminAPI.Dtos;
using AdminAPI.Helper;
using AdminAPI.Models;
using AdminAPI.Reposatory;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AdminAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IUser _repo;
        private readonly IMapper _mapper;
        private readonly MyContext _context;
        public UserController(IUser repo, IMapper mapper, MyContext context)
        {
            _context = context;
            _mapper = mapper;
            _repo = repo;

        }

        [HttpPost("add/{productName}")]
        public async Task<IActionResult> AddUser(UserDto userdto,string productName)
        {
            var userToAdd = _mapper.Map<User>(userdto);
            
            var productToAdd = await _context.Orders.FirstOrDefaultAsync(p => p.Name == productName);

            userToAdd.ProductName = productToAdd.Name;
            userToAdd.ProductPrice = productToAdd.Price;

            await _context.Users.AddAsync(userToAdd);

            await _context.SaveChangesAsync();

            return Ok(userToAdd);
        }

        [HttpGet]
        public async Task<IActionResult> GetUsers([FromQuery] UserParams userParams)
        {
            var users = await _repo.GetUsers(userParams);
            var usersToRetrun = _mapper.Map<IEnumerable<UserDto>>(users);
            return Ok(usersToRetrun);
        }



        [HttpGet("{id}")]
        public async Task<IActionResult> GetUser(int id) {
            var userFromRepo = await _repo.GetUser(id);

            return Ok(userFromRepo);
        }

        [HttpPut("edit/{id}")]
        public async Task<IActionResult> EditUser(int id, UserUpdateDto userUpdateDto)
        {
            var userFromRepo = await _repo.GetUser(id);
            var usersToRetrun = _mapper.Map(userUpdateDto,userFromRepo);


            await _context.SaveChangesAsync();

            return Ok(usersToRetrun);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            var userFromRepo = await _repo.GetUser(id);

             _context.Users.Remove(userFromRepo);

             await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpPost("send/{userId}")]
        public async Task<IActionResult> SendMsg(int userId,Message message){
            var userToSend = await _repo.GetUser(userId);
           
            message.UserId = userToSend.Id;

            await _context.Messages.AddAsync(message);

            await _context.SaveChangesAsync();

            return Ok(message);
        }

        [HttpGet("messages")]
        public async Task<IActionResult> GetMsgs() {
            var msgFromRepo = await _repo.GetMessages();

            return Ok(msgFromRepo);
        }

        [HttpGet("customerCounterAndMsg")]
        public async Task<IActionResult> GetCustomerAndMsgCounter() {
            var customers = await _context.Users.CountAsync();
            var messages = await _context.Messages.CountAsync();
            var orders = await _context.Orders.ToListAsync();

            

            return Ok(new {
                customers,
                messages,
                orders
            });
        }

        [HttpPut("approveMsg/{id}")]
        public async Task<IActionResult> ApproveMessage(int id) {
            var msg = await _repo.GetMessage(id);
            if(msg != null) {
                msg.isApprove = !msg.isApprove;
            }

            await _context.SaveChangesAsync();

            return Ok(msg);
        }

// Product- end points
        [HttpGet("products")]
        public async Task<IActionResult> GetProducts() {
            var ordersFromRepo = await _repo.GetOrders();

            return Ok(ordersFromRepo);
        }

        [HttpGet("product/{id}")]
        public async Task<IActionResult> GetProduct(int id) {
            var ordersFromRepo = await _repo.GetOrder(id);
            if(ordersFromRepo == null) {
                return BadRequest("No product exist");
            }

            return Ok(ordersFromRepo);
        }

        [HttpDelete("productRemove/{id}")]
        public async Task<IActionResult> DeleteOrder(int id) {
            var orderFromRepo = await _repo.GetOrder(id);
            
            if(orderFromRepo == null){
                return BadRequest("Order dont exist");
            }

            _context.Orders.Remove(orderFromRepo);
            
            await _context.SaveChangesAsync();

            return NoContent();

        }

        [HttpPut("product/{id}/update")]
        public async Task<IActionResult> UpdateProduct(OrderToUpdateDto orderToUpdateDto,int id){
            if(orderToUpdateDto == null) {
                return BadRequest("Product do not exist");
            }

            var orderFromRepo = await _repo.GetOrder(id);

            var orderToReturn = _mapper.Map(orderToUpdateDto,orderFromRepo);

            await _context.SaveChangesAsync();

            return Ok(orderToReturn);

        }
        
    }
}