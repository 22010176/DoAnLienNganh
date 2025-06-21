using DatabaseSchema;
using Microsoft.AspNetCore.Mvc;

namespace UserService.Controllers;

[ApiController]
[Route("/auth")]
public class AuthController(AppDbContext dbContext) : ControllerBase
{
  readonly AppDbContext _dbContext = dbContext;

  [HttpGet]
  public ActionResult Get()
  {
    return Ok(_dbContext.NguoiDung.ToList());
  }

  [HttpPost("dang-nhap")]
  public ActionResult Login()
  {
    return Ok();
  }

  [HttpPost("dang-ky")]
  public ActionResult Register()
  {
    return Ok();
  }

  [HttpDelete("dang-xuat")]
  public ActionResult Logout()
  {
    return Ok();
  }
}


