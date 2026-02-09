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
                // Health check with a 1s timeout to keep the UI responsive
                using var cts = new CancellationTokenSource(TimeSpan.FromSeconds(1));
                dbOk = await _context.Database.CanConnectAsync(cts.Token);
            }
            catch 
            {
                dbOk = false;
            }

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
