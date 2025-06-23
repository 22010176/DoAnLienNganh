using System.Security.Claims;
using System.Threading.Tasks;
using DatabaseSchema;
using DatabaseSchema.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Utilities;

namespace UserService.Controllers;

[ApiController]
[Route("/auth")]
public class AuthController(AppDbContext dbContext, IConfiguration configuration) : ControllerBase
{
  readonly AppDbContext dbContext = dbContext;
  readonly IConfiguration configuration = configuration;

  async Task<NguoiDung> CheckLoginInput(LoginInput input, LoaiNguoiDung loaiNguoiDung)
  {
    if (string.IsNullOrEmpty(input.MatKhau)) throw new Exception("Mật khẩu không được để trống!");
    bool isEmailEmpty = string.IsNullOrEmpty(input.Email);
    bool isSoDienThoaiEmpty = string.IsNullOrEmpty(input.SoDienThoai);
    if (isEmailEmpty && isSoDienThoaiEmpty) throw new Exception("Phải nhập email hoặc số điện thoại!");

    NguoiDung? nguoiDung = await dbContext.NguoiDung.FirstOrDefaultAsync(i => (!isEmailEmpty && i.Email == input.Email) || (!isSoDienThoaiEmpty && i.SoDienThoai == input.SoDienThoai));
    if (nguoiDung == null) throw new Exception("Thông tin cung cấp không hợp lệ!");
    if (nguoiDung.LoaiNguoiDung != loaiNguoiDung) throw new Exception("Loại người dùng không được hỗ trợ!");

    return nguoiDung;
  }

  [HttpPost("dang-nhap")]
  public async Task<ActionResult> Login(LoginInput input)
  {
    NguoiDung nguoiDung = await CheckLoginInput(input, input.LoaiNguoiDung);
    if (!AuthenticateUtils.CheckingPassword(nguoiDung.MatKhauBam, input.MatKhau!)) return Unauthorized(new
    {
      Message = "Không hợp lệ!",
      Success = false,
      Data = "",
      input,
      nguoiDung
    });

    return Ok(new
    {
      Message = "Đăng nhập thành công!",
      Success = true,
      Data = AuthenticateUtils.GenerateToken(
        key: configuration["Jwt:Key"]!,
        issuer: configuration["Jwt:Issuer"]!,
        audience: configuration["Jwt:Audience"]!,
        expireTime: int.Parse(configuration["Jwt:ExpireDays"]!),
        claims: [
          new Claim(ClaimTypes.UserData, nguoiDung.Id.ToString()),
          new Claim(ClaimTypes.Role, nguoiDung.LoaiNguoiDung.ToString())
        ]
      )
    });
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
}

public record LoginInput
{
  public LoaiNguoiDung LoaiNguoiDung { get; set; }
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