import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { AuthController } from "../controllers/auth.controller";
import { AuthService, FirebaseService } from "../services";
import { LocalStrategy } from "../strategy";
import { JwtStrategy } from "../strategy/jwt.strategy";
import { getEnvironment } from "../utils/environment.util";

const JwtEnvironment = getEnvironment().jwt;

@Module({
    imports: [
        PassportModule,
        
        JwtModule.register({
            secret: JwtEnvironment.accessToken.secret,
            signOptions: {
                 expiresIn: JwtEnvironment.accessToken.expiresIn
                 },
          }),
    ],
    controllers: [AuthController],
    providers: [
        LocalStrategy,
        JwtStrategy,
        AuthService,
        FirebaseService
    ],
    exports: [AuthService]
})
export class AuthModule {}