import { Postagem } from "src/Postagem/entities/postagem.entity"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Usuario {

    @PrimaryGeneratedColumn()
    @ApiProperty()     
    public id: number

    @Column({length: 80, nullable: false})
    @ApiProperty()   
    public nome: string

    @Column({length: 80, nullable: false })
    @ApiProperty()   
    public usuario: string

    @Column({length: 256, nullable: false })
    @ApiProperty()   
    public senha: string

    @Column({type: "longtext" })
    @ApiProperty()   
    public foto: string

    @OneToMany(() => Postagem, (postagem) => postagem.usuario)
    postagem: Postagem[]  //Documentação: https://typeorm.io/many-to-one-one-to-many-relations
}