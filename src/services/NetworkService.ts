import { INetworkService } from './interfaces/INetworkService';

export class NetworkService implements INetworkService {
  checkConnection(): Promise<boolean> {
    return Promise.resolve(true);
  }
}
