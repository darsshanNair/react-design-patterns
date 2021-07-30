import 'reflect-metadata';
import { injectable } from 'inversify';
import { IUserService } from './interfaces/IUserService';

// Using this decorator to make this an injectable class
// for Dependency Injection

@injectable()
export class UserService implements IUserService {
  getUsername(): Promise<string> {
    return Promise.resolve('john_smith');
  }
}
