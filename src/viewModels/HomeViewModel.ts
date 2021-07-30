import { container } from '../services/DependencyInjectionContainer';
import { INetworkService } from '../services/interfaces/INetworkService';
import ServiceContainer from '../services/ServiceContainer';
import { UserService } from '../services/UserService';

export class HomeViewModel {
  private _userService: UserService;
  private _networkService: INetworkService;
  address: string = '';

  constructor() {
    // Retrieve the instance of UserService from the
    // Dependency Injection container
    this._userService = container.get(UserService);

    // Retrieve the instance of NetworkService from the
    // singleton Service Container
    this._networkService = ServiceContainer.shared.networkServices;
  }

  getUsername = async (): Promise<string> =>
    await this._userService.getUsername();

  getConnection = async (): Promise<boolean> =>
    await this._networkService.checkConnection();
}
