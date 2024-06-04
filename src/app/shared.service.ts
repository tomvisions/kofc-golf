import { Injectable } from '@angular/core';
import {environment} from "../environment/environment";

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private _apiLocation;

  constructor() {
    if (environment.node_env === 'dev') {
      this._apiLocation = 'http://localhost:9000'
    //  this._apiLocation = 'https://api-stage.tomvisions.com';
    } else if (environment.node_env === 'stage') {
        this._apiLocation = 'https://d2gifgqgzdur7l.cloudfront.net'
    } else {
      this._apiLocation = 'https://d2gifgqgzdur7l.cloudfront.net';
    }
  }

  get apiLocation() {
    return this._apiLocation;
  }
}
