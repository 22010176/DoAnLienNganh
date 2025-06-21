using DatabaseSchema.Models;
using Microsoft.EntityFrameworkCore;

namespace DatabaseSchema;

public class AppDbContext(DbContextOptions<AppDbContext> options) : DbContext(options)
{
  public DbSet<NguoiDung> NguoiDung { get; set; }
}
