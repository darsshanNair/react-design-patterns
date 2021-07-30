import { IObservable } from './interfaces/IObservable';
import { IObserver } from './interfaces/IObserver';

export class BaseObservable implements IObservable<IObserver<BaseObservable>> {
  private _observers: IObserver<BaseObservable>[];

  constructor(observers: IObserver<BaseObservable>[]) {
    // Initialise an empty array of observers
    this._observers = observers;
  }

  // Subscribe to an observer
  subscribe(observer: IObserver<BaseObservable>) {
    const isExist = this._observers.includes(observer);
    if (isExist) {
      throw Error('Observer already attached');
    }

    console.log('Observer attached successfully');
    this._observers.push(observer);
  }

  // Unsubscribe from an observer
  unsubscribe(observer: IObserver<BaseObservable>) {
    const observerIndex = this._observers.indexOf(observer);
    if (observerIndex === 1) {
      throw Error('Observer does not exist');
    }

    console.log('Observer removed successfully');
    this._observers.splice(observerIndex, 1);
  }

  // Notify all observers about an event
  notify() {
    this._observers.forEach(observer => observer.update(this));
  }
}
