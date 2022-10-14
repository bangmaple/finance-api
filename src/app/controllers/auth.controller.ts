import { Body, Controller, Post, Request, UseGuards, Response } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { LocalAuthGuard } from "../guards";
import {Response as ExpressResponse} from 'express';
import { AuthService } from "../services";
import { EmailAndPasswordSignInRequest } from "./type";

@Controller('auth')
export class AuthController {


    constructor(private readonly authService: AuthService) {
        
    }

    @Post()
    @UseGuards(AuthGuard('local'))
    signInWithEmailAndPassword(@Request() req, @Response({passthrough: true}) res: ExpressResponse) {
        res.header('Authorization', req.user.accessToken);
        res.set('RefreshAuthorization', req.user.refreshToken);
        return {
            uid: req.user.uid,
            email: req.user.email,
        }
    }
};