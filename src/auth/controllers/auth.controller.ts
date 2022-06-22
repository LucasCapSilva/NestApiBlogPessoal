import { Controller, Request, Post, UseGuards, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { Usuario } from 'src/users/entities/usuario.entity';
import { AuthService } from '../auth.service';
import { LocalAuthGuard } from '../local-auth.guard';
import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiTags,
  } from '@nestjs/swagger';


@ApiTags('Auth')
@Controller()
export class AuthController {
    constructor(private authService: AuthService) { }

    @UseGuards(LocalAuthGuard)
    @HttpCode(HttpStatus.OK)
    @Post('auth/logar')
    async login(@Body() user: any): Promise<any> {
        return this.authService.login(user);
    }

    @HttpCode(HttpStatus.CREATED)
    @Post('auth/cadastrar') 
    async cadastrar (@Body() user: Usuario) : Promise<Usuario> {
        return await this.authService.cadastrar(user);
    }
}