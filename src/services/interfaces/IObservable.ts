import { IObserver } from './IObserver';

export interface IObservable<T> {
  subscribe(observable: IObserver<T>): void;
  unsubscribe(observable: IObserver<T>): void;
  notify(): void;
}
