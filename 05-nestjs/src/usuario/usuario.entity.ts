import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('web_gr2_olmedo')
export class UsuarioEntity {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({ length: 500 })
    nombre: string;

    @Column({ length: 500 })
    apellido: string;

    @Column('int')
    edad: number;
    
}