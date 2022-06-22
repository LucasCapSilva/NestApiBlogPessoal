import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PostagemController } from "./controllers/postagem.controller";
import { Postagem } from "./entities/postagem.entity";
import { PostagemService } from "./services/postagem.service";

@Module({
    imports: [TypeOrmModule.forFeature([Postagem])], // Resgistrando a Model no modulo de postagem
    providers: [PostagemService], // Registrando o Service no modulo de postagem
    controllers: [PostagemController], // Resgistrando Controlador de postagem
    exports: [TypeOrmModule]
})
export class PostagemModule {}