import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, filter, map, Observable, of, switchMap, take, tap, throwError } from 'rxjs';
import { SharedService } from "../shared.service";
import { Sponsor, sponsorLevel } from './sponsor.type';
import { ImageService } from '../image.service';

@Injectable({
    providedIn: 'root'
})
export class SponsorService {
    private _sponsorUs: BehaviorSubject<Sponsor | null> =   new BehaviorSubject<Sponsor | null>(null)


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
  get sponsorUs$(): Observable<Sponsor | null>
  {
    return this._sponsorUs.asObservable();
  }


    getSponsors() {
        return [
            {
                level: "diamond",
                image: this._imageService.loadImage250x150("diamond-sponsor.png"),
                name: "Diamond",
                amount: "4000",
                content: "<li>Recognized as the Exclusive Diamond Sponsor for the tournament</li><li>Company name and logo displayed prominently on event materials</li><li>Registration for a golf team (maximum 4 players), green fees, a golf cart, and a buffet supper for the team are included</li>",
            },
            {
                level: "platnum",
                image: this._imageService.loadImage250x150("platnum-sponsor.png"),
                name: "Platnum",
                amount: "2000",
                content: "<li>Platinum sponsors can choose to be recognized either as a dinner sponsor, or as a Golf Cart sponsor</li><li>Company name will be displayed prominently at either the dinner, or on the players’ golf carts</li>",
            },
            {
                level: "gold",
                image: this._imageService.loadImage250x150("gold-sponsor.png"),
                name: "Gold",
                amount: "1000",
                content: "<li>Gold sponsors will be recognized as a Skills Contest sponsor (i.e., for the Straightest Drive, On the Green, or Closest to the Pin)</li><li>Company name will be displayed prominently at the associated skills contest hole</li>"
            },
            {
                level: "silver",
                image: this._imageService.loadImage250x150("silver-sponsor.png"),
                name: "Silver",
                amount: "500",
                content: "<li>Silver sponsors will be recognized as a Refreshment Cart sponsor</li><li>Company name will be displayed on the teeing ground for each skills contest</li>"
            },
          {
            level: "bronzeplus",
            image: this._imageService.loadImage250x150("bronze-sponsor-plus.png"),
            name: "Bronze Plus",
            amount: "250",
            content: "<li>Bronze Plus sponsors will be recognized as a Hole sponsor and will have the opportunity to distribute goods to the golfing participants (120 players expected)</li><li>Company name will be display ed prominently at one hole (if a specific hole is preferred, please indicate your top 3 choices in the comments of the Sponsorship form below)</li>"
          },
      {
                level: "bronze",
                image: this._imageService.loadImage250x150("bronze-sponsor.png"),
                name: "Bronze",
                amount: "150",
                content: "<li>Bronze sponsors will be recognized as a Hole sponsor</li><li>•Company name will be displayed prominently at one hole (if a specific hole is preferred, please indicate your top 3 choices in the comments of the Sponsorship form below)</li>"
            }


        ]
    }



    sendContact(joinAcademy: Sponsor): Observable<Sponsor>
    {
      console.log(joinAcademy);
      return this.sponsorUs$.pipe(
        take(1),
        switchMap(theContactUs => this._httpClient.post<Sponsor>(`${this._sharedService.apiLocation}/api/sponsor`,
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
