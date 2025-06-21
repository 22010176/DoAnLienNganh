using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using System.Text;

using DatabaseSchema;

namespace Utilities;

public static class AppStartUp
{
  public static IServiceCollection InitPostgreDatabase(IServiceCollection services, IConfiguration configuration)
  {
    services.AddDbContext<AppDbContext>(options =>
      options.UseNpgsql(configuration.GetConnectionString("DefaultConnection")));
    return services;
  }

  public static IServiceCollection InitCors(IServiceCollection services)
  {
    services.AddCors(options =>
      options.AddDefaultPolicy(builder =>
        builder.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin()));
    return services;
  }

  public static IServiceCollection InitSwagger(IServiceCollection services)
  {
    services.AddSwaggerGen();
    return services;
  }

  public static IServiceCollection InitController(IServiceCollection services)
  {
    services.AddControllers().AddNewtonsoftJson(options =>
      options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore);
    return services;
  }

  public static IServiceCollection InitJWTAuth(IServiceCollection services, IConfiguration configuration)
  {

    services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
      .AddJwtBearer(options =>
      {
        options.TokenValidationParameters = new()
        {
          // ValidateIssuer = true,
          // ValidIssuer = configuration["Jwt:Issuer"],
          // ValidateAudience = true,
          // ValidAudience = configuration["Jwt:Audience"],
          ValidateLifetime = true,
          ValidateIssuerSigningKey = true,
          IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["Jwt:Key"]!))
        };
      });
    return services;
  }

  public static IServiceCollection InitSwaggerWithAuth(IServiceCollection services)
  {
    services.AddEndpointsApiExplorer();
    services.AddSwaggerGen(options =>
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
    return services;
  }
}
