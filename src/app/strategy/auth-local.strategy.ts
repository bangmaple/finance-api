import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../services';
import {JwtService} from '@nestjs/jwt';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService,
    private readonly jwtService: JwtService) {
    super({ usernameField: "email" })

  }

  async validate(email: string, password: string): Promise<any> {
    const user = await this.authService.signInWithEmailAndPassword(email, password);
    if (!user) {
        throw new UnauthorizedException();
      }
    const extractedUserInfo = {
        uid: user.uid,
        email: user.email,
    };

    const jwt = await this.jwtService.signAsync(extractedUserInfo);
    const refreshToken = await this.authService.generateRefreshToken(extractedUserInfo.uid);
    return {
        ...extractedUserInfo,
        accessToken: jwt,
        refreshToken
    };
  }
}