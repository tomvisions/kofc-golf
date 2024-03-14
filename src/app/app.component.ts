import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ImageService } from './image.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class AppComponent implements OnInit{
  title = 'kofc-golf';
  siteLogo: string = ""
  year: number  = 0;
  

  constructor(private _imageService: ImageService) {
  }

  ngOnInit() {
   // this._imageService.setSitePrefix();
    this.siteLogo = this._imageService.loadImage100x100('kofc-logo100x100.png');
    this.year = new Date().getFullYear();
  }
}
