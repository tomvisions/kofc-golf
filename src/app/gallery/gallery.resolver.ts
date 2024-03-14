import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import {GalleryService} from "./gallery.service";
import {Gallery, GetGallery, Image} from '../gallery/gallery.type'

@Injectable({
    providedIn: 'root'
})

export class GalleryResolver 
{
    /**
     * Constructor
     */
    constructor(private _galleryService: GalleryService,  private _router: Router)
    {
    }  
  

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Resolver
   *
   * @param route
   * @param state
   */
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Image  | null>
  {
    return this._galleryService.getGallery("golf-tournament-2023")
      .pipe(
        // Error here means the requested product is not available
        catchError((error) => {

          // Log the error
          console.error(error);

          // Get the parent url
          const parentUrl = state.url.split('/').slice(0, -1).join('/');

          // Navigate to there
          this._router.navigateByUrl(parentUrl);

          // Throw an error
          return throwError(error);
        })
      );
  }
}
