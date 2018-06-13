import {BadRequestException, Body, Controller, Post} from "@nestjs/common";
import {JwtService} from "../servicios/jwt.service";

@Controller('Auth')
export class AuthController {

    constructor(private _jwtService: JwtService) {
    }

    @Post('emitir')
    emitirToken(
        @Body('usuario') usuario,
        @Body('password') password,
    ) {
        const enviaParametros = usuario && password;

        if (enviaParametros) {
            const credencialesValidas = usuario === 'adrianeguez' && password === '1234';
            if (credencialesValidas) {
                return `
<html>
<head></head>
<body>
<h1>Token</h1>
<p>${this._jwtService.emitirToken({usuario: usuario})}</p>
</body>
</html>`
            } else {
                throw new BadRequestException({
                    mensaje: 'Credenciales invalidas'
                });
            }
        } else {
            throw new BadRequestException({
                mensaje: 'No envia parametros'
            });
        }

    }

    @Post('verificarSync')
    verificarTokenSync(
        @Body('jwt') jwt
    ) {
        const enviaParametros = jwt;
        if (enviaParametros) {
            const tokenvalido = this._jwtService
                .verificarTokenSync(jwt);
            if (tokenvalido) {
                return {mensaje: 'Ok'}
            } else {
                throw new BadRequestException({
                    mensaje: 'Token invalido'
                })
            }

        } else {
            throw new BadRequestException({
                mensaje: 'No envia parametros'
            })
        }
    }


    @Post('verificarAsync')
    verificarTokenAsync(
        @Body('jwt') jwt
    ) {
        const enviaParametros = jwt;
        if (enviaParametros) {
            this._jwtService
                .verificarTokenAsync(
                    jwt,
                    (error, datos) => {
                        if (error) {
                            throw new BadRequestException({
                                mensaje: 'Token invalido',
                                error: error
                            });
                        } else {
                            return {mensake: 'Ok'};
                        }
                    }
                )

        } else {
            throw new BadRequestException({
                mensaje: 'No envia parametros'
            })
        }
    }
}