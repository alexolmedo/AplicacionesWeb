import {ArgumentMetadata, BadRequestException, Injectable, PipeTransform} from "@nestjs/common";
import {USUARIO_SCHEMA} from "./usuario.schema";
import * as Joi from 'joi'

@Injectable()
export class UsuarioPipe implements PipeTransform {

    constructor (private readonly schema) {}

    transform (valorEnBrutoDelRequest: any,
               metadatosDeLosDecoradoresDelNestjs: ArgumentMetadata) {

        //this.schema = USUARIO_SCHEMA;

        const { error } = Joi.validate(
            valorEnBrutoDelRequest, //Objeto a validar
            this.schema //Un esquema
        );

        if (error) {
            throw new BadRequestException(error);
        }

        return valorEnBrutoDelRequest;

    }
}