using WebApiService.Models;

namespace WebApiService.Services
{
    public class UserService : IUserService
    {
        User IUserService.PostUser(string name, string address)
        {
            return new User(name, address);
        }
    }
}
