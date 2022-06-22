import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import console, { Console } from 'console';
import { Usuario } from 'src/users/entities/usuario.entity';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) { }

  async validateUser(username: string, pass: string): Promise<any> {
    
    const user = await this.usersService.findOneByUserName(username);
    
    if (user && user.senha === pass) {
      const { senha, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };     
  
    return {
      usuario: user.username,
      access_token: this.jwtService.sign(payload),
    };
  }

  async cadastrar (user: Usuario) : Promise<Usuario> {
    return await this.usersService.create(user);
  }
}