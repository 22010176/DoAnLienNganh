using System.ComponentModel.DataAnnotations;

namespace DatabaseSchema.Models;

public class NguoiDung
{
  [Key]
  public int Id { get; set; }
  public string HoTen { get; set; } = null!;
  public GioiTinh GioiTinh { get; set; }
  public DateTime NgaySinh { get; set; }
  public string SoDienThoai { get; set; } = null!;
  public string Email { get; set; } = null!;
  public string MatKhauBam { get; set; } = null!;
  public DateTime NgayTao { get; set; }
  public LoaiNguoiDung LoaiNguoiDung { get; set; }
}

public enum GioiTinh
{
  Nam, Nu, Khac
}
public enum LoaiNguoiDung
{
  HocSinh, GiaoVien, QuanTriVien
}

public class LopHoc
{
  [Key]
  public int Id { get; set; }
  public string MaLopHoc { get; set; } = null!;
  public string TenLopHoc { get; set; } = null!;
  public string MoTa { get; set; } = null!;
  public DateTime ThoiGianTao { get; set; } = DateTime.UtcNow;

  public int NguoiTaoId { get; set; }
  public NguoiDung NguoiTao { get; set; } = null!;
}

public class LopHoc_NguoiDung
{
  [Key]
  public int Id { get; set; }
  public DateTime ThoiGianYeuCau { get; set; }


  public int LopHocId { get; set; }
  public LopHoc LopHoc { get; set; } = null!;


  public int NguoiDungId { get; set; }
  public NguoiDung NguoiDung { get; set; } = null!;
}