
interface JwtEnvironment {
    secret: string;
    expiresIn: string;
}

export interface Environment {
    jwt: {
        accessToken: JwtEnvironment,
        refreshToken: JwtEnvironment
    };
}