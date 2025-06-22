using DatabaseSchema;
using DatabaseSchema.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace UserService.Controllers;

[ApiController]
// [Authorize]
[Route("lop-hoc")]
public class LopHocController(AppDbContext context) : ControllerBase
{
  readonly AppDbContext dbContext = context;

  private static async Task<List<object>> GetLopHoc(AppDbContext context)
  {
    var result =
      from lh in context.LopHoc
      orderby lh.Id descending
      select lh;
    return await result.Cast<object>().ToListAsync();
  }

  [HttpGet]
  public async Task<ActionResult> Get()
  {
    return Ok(new
    {
      Data = await GetLopHoc(dbContext)
    });
  }

  [HttpPost]
  public async Task<ActionResult> Post(LopHocInput input)
  {
    LopHoc lopHoc = new()
    {
      MaLopHoc = "",
      TenLopHoc = input.TenLopHoc,
      MoTa = input.MoTa,
      ThoiGianTao = DateTime.UtcNow,
    };

    await dbContext.LopHoc.AddAsync(lopHoc);
    await dbContext.SaveChangesAsync();

    lopHoc = (await dbContext.LopHoc.FindAsync(lopHoc.Id))!;
    lopHoc.MaLopHoc = $"LH{lopHoc.Id.ToString().PadLeft(9, '0')}";
    await dbContext.SaveChangesAsync();
    return Ok(new
    {
      Data = await GetLopHoc(dbContext)
    });
  }

  [HttpPut("{id}")]
  public async Task<ActionResult> UpdateAsync(int id, LopHocInput input)
  {
    LopHoc? lopHoc = dbContext.LopHoc.FirstOrDefault(i => i.Id == id);
    if (lopHoc == null) return NotFound();

    lopHoc.TenLopHoc = input.TenLopHoc;
    lopHoc.MoTa = input.MoTa;
    await dbContext.SaveChangesAsync();
    return Ok(new
    {
      Data = await GetLopHoc(dbContext)
    });
  }

  [HttpDelete("{id}")]
  public async Task<ActionResult> DeleteAsync(int id)
  {
    LopHoc? lopHoc = dbContext.LopHoc.FirstOrDefault(i => i.Id == id);
    if (lopHoc == null) return NotFound();

    dbContext.Remove(lopHoc);
    await dbContext.SaveChangesAsync();
    return Ok(new
    {
      Data = await GetLopHoc(dbContext)
    });
  }
}

public record LopHocInput
{
  public string TenLopHoc { get; set; } = null!;
  public string MoTa { get; set; } = null!;
}