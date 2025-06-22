using System.Threading.Tasks;
using DatabaseSchema;
using DatabaseSchema.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Utilities;

namespace UserService.Controllers;

[ApiController]
[Route("/auth")]
public class AuthController(AppDbContext dbContext) : ControllerBase
{
  readonly AppDbContext dbContext = dbContext;

  async Task CheckLoginInput(LoginInput input, LoaiNguoiDung loaiNguoiDung)
  {
    if (string.IsNullOrEmpty(input.MatKhau)) throw new Exception("Mật khẩu không được để trống!");
    if (string.IsNullOrEmpty(input.Email) && string.IsNullOrEmpty(input.SoDienThoai)) throw new Exception("Phải nhập email hoặc số điện thoại!");

    NguoiDung? nguoiDung = await dbContext.NguoiDung.FirstOrDefaultAsync(i => i.Email == input.Email || i.SoDienThoai == input.SoDienThoai);
    if (nguoiDung == null) throw new Exception("Thông tin cung cấp không hợp lệ!");
    if (nguoiDung.LoaiNguoiDung != loaiNguoiDung) throw new Exception("Loại người dùng không được hỗ trợ!");
  }

  [HttpGet]
  public ActionResult Get()
  {
    return Ok(dbContext.NguoiDung.ToList());
  }

  [HttpPost("giang-vien/dang-nhap")]
  public async Task<ActionResult> LoginGiangVien(LoginInput input)
  {
    await CheckLoginInput(input, LoaiNguoiDung.GiaoVien);
    return Ok();
  }

  [HttpPost("hoc-sinh/dang-nhap")]
  public async Task<ActionResult> LoginHocSinhAsync(LoginInput input)
  {
    await CheckLoginInput(input, LoaiNguoiDung.HocSinh);
    return Ok();
  }

  [HttpPost("dang-ky")]
  public async Task<ActionResult> RegisterAsync(NguoiDungInput input)
  {
    NguoiDung nguoiDung = new()
    {
      HoTen = input.HoTen,
      GioiTinh = input.GioiTinh,
      NgaySinh = TimeZoneInfo.ConvertTimeToUtc(input.NgaySinh),
      SoDienThoai = input.SoDienThoai,
      Email = input.Email,
      MatKhauBam = AuthenticateUtils.PasswordHashing(input.MatKhau),
      LoaiNguoiDung = input.LoaiNguoiDung,
      NgayTao = DateTime.UtcNow
    };

    try
    {
      await dbContext.NguoiDung.AddAsync(nguoiDung);
      await dbContext.SaveChangesAsync();
    }
    catch (Exception err)
    {
      throw err;
    }
    return Ok(new
    {
      Message = "Tạo tài khoản thành công!",
      Success = true
    });
  }

  [HttpDelete("dang-xuat")]
  public ActionResult Logout()
  {
    return Ok();
  }
}

public record LoginInput
{
  public string? Email { get; set; }
  public string? SoDienThoai { get; set; }
  public string? MatKhau { get; set; }
}

public record NguoiDungInput
{
  public string HoTen { get; set; } = null!;
  public GioiTinh GioiTinh { get; set; }
  public DateTime NgaySinh { get; set; }
  public string SoDienThoai { get; set; } = null!;
  public string Email { get; set; } = null!;
  public string MatKhau { get; set; } = null!;
  public LoaiNguoiDung LoaiNguoiDung { get; set; }
}