//Documentação https://docs.nestjs.com/techniques/database

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Postagem } from './Postagem/entities/postagem.entity';
import { PostagemModule } from './Postagem/postagem.module';
import { AuthModule } from './auth/auth.module';
import { Tema } from './Tema/entities/tema.entity';
import { UsersModule } from './users/users.module';
import { Usuario } from './users/entities/usuario.entity';
import { TemaModule } from './Tema/tema.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Admin357/',
      database: 'db_blog_pessoal',
      entities: [Postagem, Tema, Usuario], //Indicar a pasta onde contem as entidades
      synchronize: true,
    }),
    PostagemModule,
    TemaModule,
    AuthModule,
    UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
