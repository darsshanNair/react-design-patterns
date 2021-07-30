import 'reflect-metadata';
import { Container } from 'inversify';
import { UserService } from './UserService';

// Initialise new dependency injection container
let container = new Container();
container.bind(UserService).toSelf();

export { container };
