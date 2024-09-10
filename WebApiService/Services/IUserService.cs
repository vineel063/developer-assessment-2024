using WebApiService.Models;

namespace WebApiService.Services
{
    public interface IUserService
    {
        User PostUser(string name, string address);
    }
}
