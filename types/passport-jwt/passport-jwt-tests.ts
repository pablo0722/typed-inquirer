/// <reference types="passport" />
'use strict';

import { Strategy as JwtStrategy, ExtractJwt, StrategyOptions } from 'passport-jwt';
import { Request } from 'express';
import * as passport from 'passport';

let opts: StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeader(),
    secretOrKey: 'secret',
    issuer: 'accounts.example.com',
    audience: 'example.org',
};

passport.use(
    JwtStrategy.name,
    new JwtStrategy(opts, function(jwt_payload, done) {
        findUser({ id: jwt_payload.sub }, function(err, user) {
            if (err) {
                return done(err, false);
            }
            if (user) {
                done(null, user);
            } else {
                done(null, false, { message: 'foo' });
                // or you could create a new account
            }
        });
    }),
);

opts.jwtFromRequest = ExtractJwt.fromHeader('x-api-key');
opts.jwtFromRequest = ExtractJwt.fromBodyField('field_name');
opts.jwtFromRequest = ExtractJwt.fromUrlQueryParameter('param_name');
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('param_name');
opts.jwtFromRequest = ExtractJwt.fromExtractors([
    ExtractJwt.fromHeader('x-api-key'),
    ExtractJwt.fromBodyField('field_name'),
    ExtractJwt.fromUrlQueryParameter('param_name'),
]);
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.jwtFromRequest = (req: Request) => {
    return req.query.token as string;
};
opts.secretOrKey = new Buffer('secret');
opts.secretOrKeyProvider = (request, rawJwtToken, done) => done(null, new Buffer('secret'));

class UserModel {}

declare global {
    namespace Express {
        // tslint:disable-next-line:no-empty-interface
        interface User extends UserModel {}
    }
}
declare function findUser(condition: { id: string }, callback: (error: any, user: UserModel) => void): void;
