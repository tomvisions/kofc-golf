import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, filter, map, Observable, of, switchMap, take, tap, throwError } from 'rxjs';
import { SharedService } from "../shared.service";
import { ImageService } from '../image.service';
import { Volunteer } from './volunteer.type';

@Injectable({
    providedIn: 'root'
})
export class VolunteerService {
    private _sponsorUs: BehaviorSubject<Volunteer | null> =   new BehaviorSubject<Volunteer | null>(null)


    /**
     * Constructor
     */
    constructor(private _httpClient: HttpClient, private _sharedService: SharedService, private _imageService: ImageService) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------


  /**
   * Getter for product
   */
  get sponsorUs$(): Observable<Volunteer | null>
  {
    return this._sponsorUs.asObservable();
  }


    getSponsors() {
        return [
            {
                level: "diamond",
                image: this._imageService.loadImage250x150("diamond-level.jpg"),
                name: "Diamond",
                amount: "4000",
                content: "<li>Recognised as the Tournament Sponsor</li><li>Name and Logo displayed prominently on event materials</li><li>Only One Diamond Sponsor will be used</li><li>Registration fee for golf, cart and lunch for foursome at the Annual Charity Golf Tournament is included</li>",
            },
            {
                level: "platnum",
                image: this._imageService.loadImage250x150("platnum-level.jpg"),
                name: "Platnum",
                amount: "2000",
                content: "<li>Recognised as a Lunch Sponsor or a Players' Golf Cart Sponsor</li><li>Name displayed prominently at Lunch or on Players' Golf Carts</li>",
            },
            {
                level: "gold",
                image: this._imageService.loadImage250x150("gold-level.jpg"),
                name: "Gold",
                amount: "1000",
                content: "<li>Recognised as a Skills Contest Hole Sponsor</li><li>Name displayed prominently at Lunch or on Players' Golf Carts</li><li>Skills Contests will be Straightest Drive, On the Green, and Closest to the Pin</li>"
            },
            {
                level: "silver",
                image: this._imageService.loadImage250x150("silver-level.jpeg"),
                name: "Silver",
                amount: "500",
                content: "<li>Recognised as a Refreshment Cart Sponsor</li><li>Name displayed prominently on the teeing ground at each Skills Contest</li>"
            },
            {
                level: "bronze",
                image: this._imageService.loadImage250x150("bronze-level.jpg"),
                name: "Bronze",
                amount: "150",
                content: "<li>Recognised as a Hole Sponsor</li><li>Name displayed prominently on the teeing ground at one hole</li>"
            }

        ]
    }



    sendVolunteer(joinAcademy: Volunteer): Observable<Volunteer>
    {
      console.log(joinAcademy);
      console.log(`${this._sharedService.apiLocation}/api/v1/mail`)
      return this.sponsorUs$.pipe(
        take(1),
        switchMap(theContactUs => this._httpClient.post<Volunteer>(`${this._sharedService.apiLocation}/api/v1/mail`,
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
