"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const usuario_service_1 = require("./usuario.service");
let AppPeliculaController = class AppPeliculaController {
    constructor(_usuarioService) {
        this._usuarioService = _usuarioService;
        this.peliculas = [];
    }
    mostrarCartelera() {
        return this.peliculas;
    }
    anadirACartelera(parametros) {
        this.peliculas
            .push(new Pelicula(parametros.nombre, parametros.estreno));
        return this.peliculas;
    }
    anadirACarteleraConQueryParameters(req, res) {
        const paramtrosQuery = req.query;
        this.peliculas
            .push(new Pelicula(paramtrosQuery.nombre, paramtrosQuery.estreno));
        return res.send(this.peliculas);
    }
    recuperarUsuarios() {
        return this._usuarioService.arregloUsuarios;
    }
    anadirUsuario(bodyParams) {
        const usuario = new usuario_service_1.Usuario(bodyParams.nombre, bodyParams.apellido, bodyParams.edad);
        return this._usuarioService.agregarUsuario(usuario);
    }
    borrarUsuario(bodyParams) {
        const usuario = new usuario_service_1.Usuario(bodyParams.nombre, bodyParams.apellido, bodyParams.edad);
        return this._usuarioService.borrarUsuario(usuario);
    }
};
__decorate([
    common_1.Get('mostrarCartelera'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppPeliculaController.prototype, "mostrarCartelera", null);
__decorate([
    common_1.Post('mostrarCartelera/:nombre/:estreno'),
    common_1.HttpCode(203),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppPeliculaController.prototype, "anadirACartelera", null);
__decorate([
    common_1.Post('mostrarCartelera'),
    common_1.HttpCode(201),
    __param(0, common_1.Req()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AppPeliculaController.prototype, "anadirACarteleraConQueryParameters", null);
__decorate([
    common_1.Get('recuperarUsuarios'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppPeliculaController.prototype, "recuperarUsuarios", null);
__decorate([
    common_1.Post('anadirUsuario'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppPeliculaController.prototype, "anadirUsuario", null);
__decorate([
    common_1.Delete('borrarUsuario'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppPeliculaController.prototype, "borrarUsuario", null);
AppPeliculaController = __decorate([
    common_1.Controller('Pelicula'),
    __metadata("design:paramtypes", [usuario_service_1.UsuarioService])
], AppPeliculaController);
exports.AppPeliculaController = AppPeliculaController;
class Pelicula {
    constructor(nombre, estreno) {
        this.nombre = nombre;
        this.estreno = estreno;
    }
}
//# sourceMappingURL=app.pelicula-controller.js.map