using Utilities;

var builder = WebApplication.CreateBuilder(args);

AppStartUp.InitCors(builder);
AppStartUp.InitSwaggerWithAuth(builder);
AppStartUp.InitPostgreDatabase(builder);
AppStartUp.InitJWTAuth(builder);
AppStartUp.InitController(builder);

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
