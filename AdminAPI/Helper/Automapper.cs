using AdminAPI.Dtos;
using AdminAPI.Models;
using AutoMapper;

namespace AdminAPI.Helper
{
    public class Automapper : Profile
    {
        public Automapper()
        {
            CreateMap<User,UserDto>();
            CreateMap<UserDto,User>();

            CreateMap<User,UserToCreateDto>();
            CreateMap<UserToCreateDto,User>();

             CreateMap<UserUpdateDto,User>();
              CreateMap<User,UserUpdateDto>();

        }
    }
}