using AutoMapper;
using Core.Entities;
using Core.Interfaces;
using Core.Specification;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Dtos;
using WebAPI.Erros;

namespace WebAPI.Controllers
{
    public class ProductoController : BaseApiController
    {
        private readonly IGenericRepository<Producto> _productoRepository;
        private readonly IMapper _mapper;

        public ProductoController(IGenericRepository<Producto> productoRepository, IMapper mapper)
        {
            _productoRepository = productoRepository;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<List<Pagination<ProductoDto>>>> GetProductos([FromQuery] ProductoSpecificationParams productoParams)
        {
            var spec = new ProductoWithCategoriaAndMarcaSpecification(productoParams);

            var productos = await _productoRepository.GetAllWithSpec(spec);

            var specCount = new ProductoForCountSpecification(productoParams);
            var totalProductos = await _productoRepository.CountAsync(specCount);
            var rounded = Math.Ceiling(Convert.ToDecimal(totalProductos / productoParams.PageSize));
            var totalPages = Convert.ToInt32(rounded);

            var data = _mapper.Map<IReadOnlyList<Producto>, IReadOnlyList<ProductoDto>>(productos);

            return Ok(
                new Pagination<ProductoDto>
                {
                    Count = totalProductos,
                    Data = data,
                    PageCount = totalPages,
                    PageIndex = productoParams.PageIndex,
                    PageSize = productoParams.PageSize
                });
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ProductoDto>> GetProducto(int id)
        {
            //spec = debe incluir la logica de la condicion de la consulta y tambien las relaciones entre
            //las entidades, la relacion entre Producto, Marca y Categoria
            var spec = new ProductoWithCategoriaAndMarcaSpecification(id);
            var producto = await _productoRepository.GetByIdWithSpec(spec);
            if (producto == null)
                return NotFound(new CodeErrorResponse(404, "El producto no existe"));

            return _mapper.Map<Producto, ProductoDto>(producto);
        }
    }
}
