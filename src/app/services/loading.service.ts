import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private _isLoading = true;

  constructor() { }

  showLoading() {
    this._isLoading = true;
  }

  hideLoading() {
    this._isLoading = false;
  }

  isLoading() {
    return this._isLoading;
  }
}
