using Core.Entities;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace BusinessLogic.Data
{
    public class MarketDbContextData
    {
        public static async Task CargaDataAsync(MarketDbContext context, ILoggerFactory loggerFactory)
        {
            try
            {
                if(!context.Marca.Any())
                {
                    var marcaData = File.ReadAllText("../BusinessLogic/CargaData/marca.json");
                    var marcas = JsonSerializer.Deserialize<List<Marca>>(marcaData);

                    foreach(var marca in marcas)
                    {
                        context.Marca.Add(marca);
                    }

                    await context.SaveChangesAsync();
                }

                if (!context.Categoria.Any())
                {
                    var categoriaData = File.ReadAllText("../BusinessLogic/CargaData/categoria.json");
                    var categorias = JsonSerializer.Deserialize<List<Categoria>>(categoriaData);

                    foreach (var categoria in categorias)
                    {
                        context.Categoria.Add(categoria);
                    }

                    await context.SaveChangesAsync();
                }

                if (!context.Producto.Any())
                {
                    var productoData = File.ReadAllText("../BusinessLogic/CargaData/producto.json");
                    var productos = JsonSerializer.Deserialize<List<Producto>>(productoData);

                    foreach (var producto in productos)
                    {
                        context.Producto.Add(producto);
                    }

                    await context.SaveChangesAsync();
                }

            }
            catch(Exception ex)
            {
                var logger = loggerFactory.CreateLogger<MarketDbContextData>();
                logger.LogError(ex.Message);
            }
        }
    }
}
