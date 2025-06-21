using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace UserService.Controllers;

[ApiController]
[Authorize]
[Route("users")]
public class UserController : ControllerBase
{
  [HttpGet]
  public ActionResult GetUser()
  {
    return Ok();
  }

  [HttpPut]
  public ActionResult UpdateUser()
  {
    return Ok();
  }

  [HttpDelete]
  public ActionResult DeleteUser()
  {
    return Ok();
  }
}