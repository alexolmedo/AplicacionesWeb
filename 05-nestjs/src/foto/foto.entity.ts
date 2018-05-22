import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {UsuarioEntity} from "../usuario/usuario.entity";
import {type} from "os";

@Entity('web_gr2_olmedoa_foto')
export class FotoEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @Column('text')
    url:string;

    @ManyToOne(
        type => UsuarioEntity,
        usuario => usuario.fotos
    )

    usuario: UsuarioEntity;

}