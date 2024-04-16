import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, filter, map, Observable, of, switchMap, take, tap, throwError } from 'rxjs';
import { SharedService } from "../shared.service";
import { ImageService } from '../image.service';

@Injectable({
    providedIn: 'root'
})
export class SponsorsService {


    /**
     * Constructor
     */
    constructor(private _httpClient: HttpClient, private _sharedService: SharedService, private _imageService: ImageService) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    getSponsors () {
        return [
            {
                image: this._imageService.loadImage300x150("sponsors-house-of-canvas.avif"),
                name: "House of Canvas",
                content: "<p>Since 1976, House of Canvas has been recognized as an innovator in awning design, engineering, and fabrication.</p>",
                link: "https://houseofcanvas.com/",
            },
        ]
    }



}
