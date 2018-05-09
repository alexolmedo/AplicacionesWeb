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
let ParametrosController = class ParametrosController {
    recuperarParametros(request, response, paramParams, queryParams, bodyParams) {
        const respuesta = {
            paramParams: paramParams,
            queryParams: queryParams,
            bodyParams: bodyParams,
        };
        console.log(respuesta);
        return response.send(respuesta);
    }
    recuperarParametrosConGet(request, response, paramParams, queryParams, bodyParams) {
        const respuesta = {
            paramParams: paramParams,
            queryParams: queryParams,
            bodyParams: bodyParams,
        };
        console.log(respuesta);
        return response.send(respuesta);
    }
    requestResponse(request, response, headers) {
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
};
__decorate([
    common_1.Post('recuperar/:id/:materia'),
    __param(0, common_1.Req()),
    __param(1, common_1.Res()),
    __param(2, common_1.Param()),
    __param(3, common_1.Query()),
    __param(4, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object, Object, Object]),
    __metadata("design:returntype", void 0)
], ParametrosController.prototype, "recuperarParametros", null);
__decorate([
    common_1.Get('recuperar/:id/:materia'),
    __param(0, common_1.Req()),
    __param(1, common_1.Res()),
    __param(2, common_1.Param()),
    __param(3, common_1.Query()),
    __param(4, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object, Object, Object]),
    __metadata("design:returntype", void 0)
], ParametrosController.prototype, "recuperarParametrosConGet", null);
__decorate([
    common_1.Get('ReqRes'),
    __param(0, common_1.Req()),
    __param(1, common_1.Res()),
    __param(2, common_1.Headers()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", void 0)
], ParametrosController.prototype, "requestResponse", null);
ParametrosController = __decorate([
    common_1.Controller('Parametros')
], ParametrosController);
exports.ParametrosController = ParametrosController;
//# sourceMappingURL=parametros.controller.js.map