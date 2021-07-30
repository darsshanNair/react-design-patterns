import { IObservable } from './IObservable';

export interface IObserver<T> {
  // Receive an update from an observable
  update(observable: IObservable<T>): void;
}
