using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Erros;

namespace WebAPI.Controllers
{
    [Route("errors")]
    [ApiController]
    public class ErrorController : BaseApiController
    {
        [HttpGet]
        public IActionResult Error(int code)
        {
            return new ObjectResult(new CodeErrorResponse(code));
        }
    }
}
