using System.ComponentModel.DataAnnotations;

namespace DatabaseSchema.Models;

public class MonHoc
{
  [Key]
  public int Id { get; set; }
  public string MaMonHoc { get; set; } = null!;
  public string TenMonHoc { get; set; } = null!;
}

public class DanhSachCauHoi
{
  [Key]
  public int Id { get; set; }
  public string TenDanhSach { get; set; } = null!;
  public DateTime LanCapNhatCuoi { get; set; }

  public int MonHocId { get; set; }
  public MonHoc? MonHoc { get; set; }
}


