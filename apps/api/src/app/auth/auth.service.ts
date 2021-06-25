import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { LoginRequest } from '@example-login/api-interfaces';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {

    const user = await this.usersService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(u: LoginRequest): Promise<any> {
    const user = await this.validateUser(u.username, u.password);

    const payload = { username: user.username, sub: user.userid};
    return {
      token: this.jwtService.sign(payload)
    }
  }
}
