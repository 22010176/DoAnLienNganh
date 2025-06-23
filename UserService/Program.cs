var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
Utilities.AppStartUp.InitPostgreDatabase(builder);
Utilities.AppStartUp.InitCors(builder);
Utilities.AppStartUp.InitJWTAuth(builder);
Utilities.AppStartUp.InitSwaggerWithAuth(builder);
Utilities.AppStartUp.InitController(builder);

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
// app.UseAuthorization();
// app.UseAuthentication();
app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.Run();
