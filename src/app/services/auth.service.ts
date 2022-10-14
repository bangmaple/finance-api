import { Injectable } from "@nestjs/common";
import { FirebaseService } from "./firebase.service";
import { JwtService } from '@nestjs/jwt';
import { getEnvironment } from "../utils/environment.util";

@Injectable()
export class AuthService {

    constructor(
        private readonly firebaseService: FirebaseService,
        private readonly jwtService: JwtService
        ) {

    }

    async signInWithEmailAndPassword(email: string, password: string): Promise<any> {
        return await this.firebaseService.signInWithEmailAndPassword(email, password)
        .then((instance) => instance?.user);
    }

    async generateRefreshToken(userId: string): Promise<string> {
        return await this.jwtService.signAsync({userId}, {
            expiresIn: getEnvironment().jwt.refreshToken.expiresIn,
            secret: getEnvironment().jwt.refreshToken.secret,
        })
    }
}