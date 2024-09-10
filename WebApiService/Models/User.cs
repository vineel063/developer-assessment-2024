using System.ComponentModel.DataAnnotations;

namespace WebApiService.Models
{
    public class User
    {
        public string Name { get; set; }

        public string Address { get; set; }

        public User(string name, string address)
        {
            Name = name;
            Address = address;
        }
    }
}
