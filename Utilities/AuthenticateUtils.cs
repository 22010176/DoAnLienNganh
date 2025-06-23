using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;

namespace Utilities;

public static class AuthenticateUtils
{
  public static string GenerateToken(string key, string issuer, string audience, int expireTime, List<Claim> claims)
  {
    var creds = new SigningCredentials(
      new SymmetricSecurityKey(Encoding.UTF8.GetBytes(key!.PadRight(32))),
      SecurityAlgorithms.HmacSha256);

    Console.WriteLine($"{key} {issuer} {audience} {expireTime}");
    var token = new JwtSecurityToken(
      issuer: issuer,
      audience: audience,
      expires: DateTime.Now.AddDays(expireTime),
      signingCredentials: creds,
      claims: claims
    );
    return new JwtSecurityTokenHandler().WriteToken(token);
  }

  public static string PasswordHashing(string password)
  {
    var hasher = new PasswordHasher<object>();
    return hasher.HashPassword(null, password);
  }

  public static bool CheckingPassword(string hashed, string password)
  {
    var hasher = new PasswordHasher<object>();
    return hasher.VerifyHashedPassword(null, hashed, password) == PasswordVerificationResult.Success;
  }
}