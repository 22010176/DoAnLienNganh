using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.Tokens;

namespace Utilities;

public static class AuthenticateUtils
{
  public static string GenerateToken(string key, string issuer, string audience, int expireTime, List<Claim> claims)
  {
    var _key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(key!));
    var creds = new SigningCredentials(_key, SecurityAlgorithms.HmacSha256);

    var token = new JwtSecurityToken(
      issuer: issuer,
      audience: audience,
      claims: claims,
      expires: DateTime.UtcNow.AddMinutes(expireTime),
      signingCredentials: creds
    );
    return new JwtSecurityTokenHandler().WriteToken(token);
  }
}