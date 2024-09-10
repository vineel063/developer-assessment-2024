using Microsoft.AspNetCore.Mvc;
using WebApiService.Models;
using WebApiService.Services;

namespace WebApiService.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost("create")]
        public IActionResult PostUserDetails(User user)
        {
            return Ok(new { Message = "Data received successfully", Data = _userService.PostUser(user.Name, user.Address) });
        }
    }
}
