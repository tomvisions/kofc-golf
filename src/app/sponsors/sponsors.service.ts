import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, filter, map, Observable, of, switchMap, take, tap, throwError } from 'rxjs';
import { SharedService } from '../shared.service';
import { ImageService } from '../image.service';

@Injectable({
  providedIn: 'root',
})
export class SponsorsService {
  /**
   * Constructor
   */
  constructor(
    private _httpClient: HttpClient,
    private _sharedService: SharedService,
    private _imageService: ImageService,
  ) {}

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  getSponsors() {
    return [
      {
        level: 'silver',
        name: 'House of Canvas',
        link: 'https://houseofcanvas.com/',
        image: this._imageService.loadImage300x150('sponsors-house-of-canvas.avif'),
      },
      {
        level: 'gold',
        image: this._imageService.loadImage200x200('goldie-mohr-lmt.jpeg'),
        link: 'https://goldiemohrltd.ca/#/',
      },
      {
        level: 'platinum',
        image: this._imageService.loadImage300x150('bta-design-1.jpg'),
        content: '<p>Since 1976, House of Canvas has been recognized as an innovator in awning design, engineering, and fabrication.</p>',
        link: 'https://www.btadesignservices.com/',
      },
      {
        level: 'bronze',
        image: this._imageService.loadImage300x150('kelly-funeral-home.jpeg'),
        name: "Kelly's Funeral Home",
        link: 'https://www.arbormemorial.ca/en/kelly-kanata.html',
      },
      {
        level: 'bronze',
        image: this._imageService.loadImage300x150('st-louis-bar-grill.jpeg'),
        name: 'St. Louis Bar & Grill',
        content: '<p>Since 1976, House of Canvas has been recognized as an innovator in awning design, engineering, and fabrication.</p>',
        link: 'https://locations.stlouiswings.com/ontario-kanata-5263',
      },
      {
        level: 'bronze',
        image: this._imageService.loadImage300x150('myers.jpeg'),
        name: 'Myers Chev-Buick-GMC',
        content: '<p>Since 1976, House of Canvas has been recognized as an innovator in awning design, engineering, and fabrication.</p>',
        link: 'https://www.myerskanatagm.ca/',
      },
      {
        level: 'bronze',
        image: this._imageService.loadImage300x150('shauna-brownlee-starr-logo-1.png'),
        name: 'Shauna Brownlee Starr',
        content: '<p>Since 1976, House of Canvas has been recognized as an innovator in awning design, engineering, and fabrication.</p>',
        link: 'https://www.sbstarr.com/',
      },
      {
        level: 'bronze',
        image: this._imageService.loadImage300x150('bioped-sponsor.jpg'),
        name: 'Bioped Footcare & Orthotics',
        content: '<p>Since 1976, House of Canvas has been recognized as an innovator in awning design, engineering, and fabrication.</p>',
        link: 'https://www.sbstarr.com/',
      },
      {
        level: 'bronze',
        image: this._imageService.loadImage300x150('pharmasave-sponsor.jpeg'),
        name: 'Pharmasave',
        content: '<p>Since 1976, House of Canvas has been recognized as an innovator in awning design, engineering, and fabrication.</p>',
        link: '',
      },
      {
        level: 'bronze',
        image: this._imageService.loadImage300x150('hulse-sponsor.jpeg'),
        name: 'Hulse, Playfair & McGarry',
        content: '<p>Since 1976, House of Canvas has been recognized as an innovator in awning design, engineering, and fabrication.</p>',
        link: '',
      },
      {
        level: 'bronze',
        image: this._imageService.loadImage300x150('logo-campbellchiro-jul20-v2.png'),
        name: 'Campbell Chiropractic Center',
        content: '<p>Since 1976, House of Canvas has been recognized as an innovator in awning design, engineering, and fabrication.</p>',
        link: '',
      },
      {
        level: 'bronze',
        image: this._imageService.loadImage300x150('sponsor-sim-orthodontics.png'),
        name: 'Campbell Chiropractic Center',
        content: '<p>Since 1976, House of Canvas has been recognized as an innovator in awning design, engineering, and fabrication.</p>',
        link: '',
      },
      {
        level: 'bronze',
        image: this._imageService.loadImage300x150('silverwood-sponsor.jpeg'),
        name: 'Sponsor Sim Orthodontics',
        content: '<p>Since 1976, House of Canvas has been recognized as an innovator in awning design, engineering, and fabrication.</p>',
        link: '',
      },
      /*      {
        level: 'bronze',
        image: this._imageService.loadImage300x150('Reliance-Holmes-logo-4C.png'),
        name: 'Reliance Holmes',
        content: '<p>Since 1976, House of Canvas has been recognized as an innovator in awning design, engineering, and fabrication.</p>',
        link: '',
      }, */
    ];
  }
}
