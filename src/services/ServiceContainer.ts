import { INetworkService } from './interfaces/INetworkService';
import { NetworkService } from './NetworkService';

// Service container for singleton services that is globally available
class ServiceContainer {
  static shared: ServiceContainer;

  constructor() {}

  static instantiate(): ServiceContainer {
    if (!ServiceContainer.shared) {
      ServiceContainer.shared = new ServiceContainer();
    }
    return ServiceContainer.shared;
  }

  private _networkServices?: INetworkService;
  get networkServices(): INetworkService {
    if (!this._networkServices) {
      this._networkServices = new NetworkService();
    }
    return this._networkServices;
  }
}

export default ServiceContainer;
