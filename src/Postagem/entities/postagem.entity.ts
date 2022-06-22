// Documentação https://docs.nestjs.com/techniques/database#repository-pattern
//              https://typeorm.io/entities

import { Tema } from "src/Tema/entities/tema.entity"
import { Usuario } from "src/users/entities/usuario.entity"
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, Tree, UpdateDateColumn } from "typeorm"
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Postagem {

    @PrimaryGeneratedColumn() 
    @ApiProperty()     
    id: number

    @Column({length: 30, nullable: false})
    @ApiProperty()  
    titulo: string

    @Column({length: 5000, nullable: false})
    @ApiProperty()  
    texto: string

    @UpdateDateColumn()
    @ApiProperty()  
    data: Date

    @ManyToOne(() => Tema, (tema) => tema.postagem)
    @ApiProperty()  
    tema: Tema //Documentação: https://typeorm.io/many-to-one-one-to-many-relations

    @ManyToOne(() => Usuario, (usuario) => usuario.postagem)
    @ApiProperty()  
    usuario: Usuario //Documentação: https://typeorm.io/many-to-one-one-to-many-relations
}
