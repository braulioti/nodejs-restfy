import * as restify from 'restify';
import * as jwt from 'jsonwebtoken';
import {User} from '../users/users.model';
import {NotAuthorizedError} from 'restify-errors';
import {environment} from '../common/environments';

export const authenticate: restify.RequestHandler =  (
    req: restify.Request, resp: restify.Response, next
) => {
    const { email, password } = req.body;
    User.findByEmail(email, '+password').then((user) => {
        if (user && user.matches(password)) {
            const token = jwt.sign({
                sub: user.email,
                iss: 'meat-api'
            }, environment.security.apiSecret);
            resp.json({
                name: user.name,
                email: user.email,
                accessToken: token
            });
            return next(false);
        } else {
            return next(new NotAuthorizedError('Invalid Credentials'))
        }
    }).catch(next);
};