import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUser } from '@example-login/api-interfaces';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(u: LoginUser): Promise<any> {
    const user = await this.authService.validateUser(u.username, u.password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
