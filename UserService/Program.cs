var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
Utilities.AppStartUp.InitPostgreDatabase(builder.Services, builder.Configuration);
Utilities.AppStartUp.InitCors(builder.Services);
Utilities.AppStartUp.InitJWTAuth(builder.Services, builder.Configuration);
Utilities.AppStartUp.InitSwaggerWithAuth(builder.Services);
Utilities.AppStartUp.InitController(builder.Services);

// Build the application.

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors();
app.UseAuthentication();
app.UseAuthorization();
app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.Run();
