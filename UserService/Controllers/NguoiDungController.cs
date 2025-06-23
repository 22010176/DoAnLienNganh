using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

using DatabaseSchema;

namespace UserService.Controllers;

[ApiController]
[Authorize]
[Route("tai-khoan")]
public class NguoiDungController(AppDbContext context) : ControllerBase
{
  readonly AppDbContext dbContext = context;
  [HttpGet]
  public ActionResult Get()
  {
    return Ok();
  }

  [HttpPut]
  public ActionResult Update()
  {
    return Ok();
  }

  [HttpDelete]
  public ActionResult Delete()
  {
    return Ok();
  }
}