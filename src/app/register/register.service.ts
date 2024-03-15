import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, filter, map, Observable, of, Subject, switchMap, take, tap, throwError } from 'rxjs';
import { Register } from './register.type';
import {SharedService} from "../shared.service";

@Injectable({
  providedIn: 'root'
})


export class RegisterService
{
  // Private
  private _registerPlayer: BehaviorSubject<Register | null> =   new BehaviorSubject<Register | null>(null)

  /**
   * Constructor
   */
  constructor(private _httpClient: HttpClient, private _sharedService: SharedService)
  {
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------


  /**
   * Getter for product
   */
  get contactUs$(): Observable<Register | null>
  {
    return this._registerPlayer.asObservable();
  }

  sendRegistration(joinAcademy: Register): Observable<Register>
  {
    console.log(joinAcademy);
    return this.contactUs$.pipe(
      take(1),
      switchMap(theContactUs => this._httpClient.post<Register>(`${this._sharedService.apiLocation}/api/v1/mail`,
        joinAcademy, { headers: {
            'Content-Type': 'application/json'
          }}).pipe(
        map((joinAcademy) => {

          return joinAcademy;
        }),
      ))
    );
  }
}
