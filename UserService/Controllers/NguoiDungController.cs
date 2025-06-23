using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

using DatabaseSchema;
using System.Security.Claims;
using Microsoft.Extensions.ObjectPool;

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
    IQueryable result;
    try
    {
      var nguoiDungId = int.Parse(User.FindFirst(ClaimTypes.UserData)?.Value.ToString()!);
      result =
        from n in dbContext.NguoiDung
        where n.Id == nguoiDungId
        select n;
    }
    catch (Exception) { throw; }
    return Ok(new
    {
      Data = result,
      Message = "Lấy người dùng thành công!",
      Success = true
    });
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