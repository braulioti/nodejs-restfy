import * as restify from 'restify';
import {User} from '../users/users.model';
import {NotAuthorizedError} from 'restify-errors';

export const authenticate: restify.RequestHandler =  (
    req: restify.Request, resp: restify.Response, next
) => {
    const { email, password } = req.body;
    User.findByEmail(email, '+password').then((user) => {
        if (user && user.matches(password)) {
            // gerar o token
        } else {
            return next(new NotAuthorizedError('Invalid Credentials'))
        }
    }).catch(next);
};