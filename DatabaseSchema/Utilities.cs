using System.Threading.Tasks;
using Npgsql;


namespace DatabaseSchema;

public static class DBUtilities
{
  public static async Task<NpgsqlConnection> GetDbConnectionAsync(string connectionString)
  {
    var conn = new NpgsqlConnection(connectionString);
    await conn.OpenAsync();
    return conn;
  }

  public static NpgsqlConnection GetDbConnection(string connectionString)
  {
    var conn = new NpgsqlConnection(connectionString);
    conn.Open();
    return conn;
  }
}