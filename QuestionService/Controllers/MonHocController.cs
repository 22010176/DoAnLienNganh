using DatabaseSchema;
using Microsoft.AspNetCore.Mvc;

namespace QuestionService.Controllers;

[ApiController]
[Route("mon-hoc")]
public class MonHocController(AppDbContext context) : ControllerBase
{
  readonly AppDbContext context = context;

  [HttpGet]
  public ActionResult Get()
  {
    return Ok();
  }
  [HttpPost]
  public ActionResult Post()
  {
    return Ok();
  }
  [HttpPut]
  public ActionResult Put()
  {
    return Ok();
  }
  [HttpDelete]
  public ActionResult DeleHttpDelete()
  {
    return Ok();
  }
}