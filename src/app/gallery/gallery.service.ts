import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, filter, map, Observable, of, switchMap, take, tap, throwError } from 'rxjs';
import { GetGallery, Image} from './gallery.type';
import {SharedService} from "../shared.service"

@Injectable({
  providedIn: 'root'
})
export class GalleryService
{
  // Private
  private _getGallery: BehaviorSubject<Image | null> = new BehaviorSubject<Image | null>(null);


  /**
   * Constructor
   */
  constructor(private _httpClient: HttpClient, private _sharedService : SharedService)
  {
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  

   /**
   * Getter for product
   */
   get getGallery$(): Observable<Image | null>
   {
     return this._getGallery.asObservable();
   }

/*
    getGalleryById(slug) : Observable<GalleryEvent> {

        return this.galleryEvent$.pipe(
          take(1),
          switchMap(gallery => this._httpClient.get<GetGallery>(`${this._sharedService.apiLocation}/api/v1/gallery/${slug}`,
            {
              headers: {
                'Content-Type': 'application/json'
              }
            }).pipe(
            map((getgallery) => {
              this._gallery.next(getgallery.galleries);
    
              return gallery;
            }),
          ))
        );
      }
*/
  getGallery(id:string): any
  {
 //   console.log(`${this._sharedService.apiLocation}/api/v1/media/id/${id}/image/0/40/key/asc`);

console.log(`${this._sharedService.apiLocation}/api/v1/media/id/${id}/image/1/100/key/asc`)
     this.getGallery$.pipe(
      take(1),
      switchMap(theContactUs => this._httpClient.get<Image>(`${this._sharedService.apiLocation}/api/v1/media/id/${id}/image/1/100/key/asc`,
        { headers: {
            'Content-Type': 'application/json'
          }}).pipe(
        map((getGallery) => {
          console.log(getGallery)
          this._getGallery.next(getGallery);

          return getGallery
        }),
      ))
    );
  }
}
