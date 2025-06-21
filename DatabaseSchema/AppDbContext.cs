using DatabaseSchema.Models;
using Microsoft.EntityFrameworkCore;

namespace DatabaseSchema;

public class AppDbContext(DbContextOptions<AppDbContext> options) : DbContext(options)
{
  public DbSet<NguoiDung> NguoiDung { get; set; }
  public DbSet<LopHoc> LopHoc { get; set; }
  public DbSet<LopHoc_NguoiDung> LopHoc_NguoiDung { get; set; }

  protected override void OnModelCreating(ModelBuilder modelBuilder)
  {
    base.OnModelCreating(modelBuilder);

    var nguoiDung = modelBuilder.Entity<NguoiDung>();
    var lopHoc = modelBuilder.Entity<LopHoc>();
    var lopHocNguoiDung = modelBuilder.Entity<LopHoc_NguoiDung>();

    lopHocNguoiDung
      .HasOne(t => t.LopHoc)
      .WithMany(t => t.LopHoc_NguoiDung)
      .HasForeignKey(t => t.LopHocId);
    lopHocNguoiDung
      .HasOne(t => t.NguoiDung)
      .WithMany(t => t.LopHoc_NguoiDung)
      .HasForeignKey(t => t.NguoiDungId);
  }
}


