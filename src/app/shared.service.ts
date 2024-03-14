import { Injectable } from '@angular/core';
import {environment} from "../environment/environment";

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private _apiLocation;

  constructor() {
    if (environment.node_env === 'dev') {
      this._apiLocation = 'http://127.0.0.1:9000'
    } else if (environment.node_env === 'stage') {
        this._apiLocation = 'https://api-stage.dynamic-sports-academy.com'
    } else {
      this._apiLocation = 'https://api.dynamic-sports-academy.com';
    }
  }

  get apiLocation() {
    return this._apiLocation;
  }
}
