import { BaseObservable } from '../services/BaseObservable';
import { IObserver } from '../services/interfaces/IObserver';

export interface UserInfoObserver extends IObserver<UserInfoViewModel> {}

export class UserInfoViewModel extends BaseObservable {
  // State
  address: string = '';

  constructor(observers: UserInfoObserver[] = []) {
    super(observers);
  }

  updateAddress(_address: string) {
    this.address = _address;
    this.notify();
  }
}
