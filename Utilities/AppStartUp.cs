using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using System.Text;

using DatabaseSchema;
using Microsoft.AspNetCore.Builder;

namespace Utilities;

public static class AppStartUp
{
  public static void InitPostgreDatabase(WebApplicationBuilder builder)
  {
    builder.Services.AddDbContext<AppDbContext>(options =>
      options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));
  }

  public static void InitCors(WebApplicationBuilder builder)
  {
    builder.Services.AddCors(options =>
      options.AddDefaultPolicy(builder =>
        builder.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin()));
  }

  public static void InitSwagger(WebApplicationBuilder builder)
  {
    builder.Services.AddEndpointsApiExplorer();
    builder.Services.AddSwaggerGen();
  }

  public static void InitController(WebApplicationBuilder builder)
  {
    builder.Services.AddControllers().AddNewtonsoftJson(options =>
      options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore);
  }

  public static void InitJWTAuth(WebApplicationBuilder builder)
  {
    var configuration = builder.Configuration;
    builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
      .AddJwtBearer(options =>
      {
        Console.WriteLine($"{configuration["Jwt:Issuer"]} {configuration["Jwt:Audience"]}");
        options.TokenValidationParameters = new()
        {
          ValidateIssuer = true,
          ValidIssuer = configuration["Jwt:Issuer"],
          ValidateAudience = true,
          ValidAudience = configuration["Jwt:Audience"],
          ValidateLifetime = true,
          ValidateIssuerSigningKey = true,
          IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["Jwt:Key"]!))
        };
      });
  }

  public static void InitSwaggerWithAuth(WebApplicationBuilder builder)
  {
    builder.Services.AddEndpointsApiExplorer();
    builder.Services.AddSwaggerGen(options =>
    {
      // Cấu hình Swagger sử dụng JWT
      options.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
      {
        Name = "Authorization",
        Type = SecuritySchemeType.ApiKey,
        Scheme = "Bearer",
        BearerFormat = "JWT",
        In = ParameterLocation.Header,
        Description = "Nhập token theo format: Bearer {your token}"
      });

      options.AddSecurityRequirement(new OpenApiSecurityRequirement
      {
        {
          new OpenApiSecurityScheme
          {
              Reference = new OpenApiReference
              {
                  Type = ReferenceType.SecurityScheme,
                  Id = "Bearer"
              }
          },
          Array.Empty<string>()
        }
      });
    });
  }
}
