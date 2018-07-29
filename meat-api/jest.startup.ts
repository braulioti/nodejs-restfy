import 'jest';
import * as jestCli from 'jest-cli';
import {Server} from './server/server';
import {environment} from './common/environments';
import {usersRouter} from './users/users.router';
import {User} from './users/users.model';
import {reviewsRouter} from './reviews/reviews.router';
import {Review} from './reviews/reviews.model';

let address: string;
let server: Server;

const beforeAllTests = () => {
    environment.db.url = process.env.DB_URL || 'mongodb://localhost/meat-api-test-db';
    environment.server.port = process.env.SERVER_PORT || 3001;
    address = `http://localhost:${environment.server.port}`;
    server = new Server();
    return server.bootstrap([usersRouter, reviewsRouter])
        .then(() => User.remove({}).exec())
        .then(() => Review.remove({}).exec())
};

const afterAllTests = () => {
    return server.shutdown();
};

beforeAllTests()
    .then(() => jestCli.run())
    .then(() => afterAllTests())
    .catch(console.error);
