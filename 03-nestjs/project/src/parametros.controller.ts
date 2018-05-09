import {Body, Controller, Get, Headers, Param, Post, Query, Req, Res} from "@nestjs/common";

@Controller('Parametros')
export class ParametrosController {

  @Post('recuperar/:id/:materia')
  recuperarParametros(
    @Req() request,
    @Res() response,
    @Param() paramParams,
    @Query() queryParams,
    @Body() bodyParams
  ) {
    const respuesta = {
      paramParams: paramParams,
      queryParams: queryParams,
      bodyParams: bodyParams,
    };
    console.log(respuesta);
    return response.send(respuesta)

  }

  @Get('recuperar/:id/:materia')
  recuperarParametrosConGet(
    @Req() request,
    @Res() response,
    @Param() paramParams,
    @Query() queryParams,
    @Body() bodyParams
  ) {
    const respuesta = {
      paramParams: paramParams,
      queryParams: queryParams,
      bodyParams: bodyParams,
    };
    console.log(respuesta);
    return response.send(respuesta)

  }

  @Get('ReqRes')
  requestResponse(
    @Req() request,
    @Res() response,
    @Headers() headers
  ) {
    const respuesta = {
      baseUrl: request.baseUrl,
      hostname: request.hostname,
      subdomains: request.subdomains,
      ip: request.ip,
      method: request.method,
      originalUrl: request.originalUrl,
      path: request.path,
      protocol: request.protocol,
      headers,
    };
    console.log(respuesta);
    return response.redirect('/Pelicula/mostrarCartelera');
  }
}
