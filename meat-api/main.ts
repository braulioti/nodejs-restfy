import {Server} from './server/server';
import {usersRouter} from './users/users.router';
import {restaurantsRouter} from './restaurants/restaurants.router';
import {reviewsRouter} from './reviews/reviews.router';

const server = new Server();

server.bootstrap([
    usersRouter,
    restaurantsRouter,
    reviewsRouter
]).then(server => {
    console.log('Server is listening on port ' + server.application.address().port);
}).catch(error => {
    console.log('Server failed to start');
    console.error(error);
    process.exit(1);
});
