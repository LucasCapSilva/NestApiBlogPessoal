import { HttpCode, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsersService {
   constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>
  ) { }

  async findOneByUserName(username: string): Promise<Usuario | undefined> {
    return await this.usuarioRepository.findOne({
      where: {
        usuario: username
      }
    })
  }

  async create (user: Usuario): Promise<Usuario> {
    const usuario = await this.findOneByUserName(user.usuario);

    if (!usuario) {
      return await this.usuarioRepository.save(user);
    }

    throw new HttpException("Usuario ja existe, tente outro!", HttpStatus.BAD_REQUEST);

  }
}