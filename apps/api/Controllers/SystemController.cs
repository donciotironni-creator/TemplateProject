using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyApp.Api.Data;

namespace MyApp.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SystemController : ControllerBase
    {
        private readonly AppDbContext _context;

        public SystemController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet("status")]
        public async Task<IActionResult> GetStatus()
        {
            var dbOk = false;
            try
            {
                // Simple check to see if we can connect to DB
                dbOk = await _context.Database.CanConnectAsync();
            }
            catch { }

            return Ok(new
            {
                Status = "Online",
                Database = dbOk ? "Connected" : "Disconnected",
                ServerTime = DateTime.UtcNow,
                Environment = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") ?? "Production",
                Version = "1.0.0"
            });
        }
    }
}
