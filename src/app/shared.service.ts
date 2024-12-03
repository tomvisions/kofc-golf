import { Injectable } from '@angular/core';
import {environment} from "../environment/environment";

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private _apiLocation;

  constructor() {
    this._apiLocation = environment.api_location;
  }

  get apiLocation() {
    return this._apiLocation;
  }
}
