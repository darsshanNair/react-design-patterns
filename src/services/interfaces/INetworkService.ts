export interface INetworkService {
  checkConnection(): Promise<boolean>;
}
