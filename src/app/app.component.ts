import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ImageService } from './image.service';
import {Meta} from "@angular/platform-browser";

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


  constructor(private _imageService: ImageService, private _metaTagService: Meta) {
  }

  ngOnInit() {
   // this._imageService.setSitePrefix();
    this.siteLogo = this._imageService.loadImage100x100('kofc-logo100x100.png');
    this.year = new Date().getFullYear();

    this._metaTagService.addTags([
      {
        name: 'keywords',
        content: 'About Knights of Columbus',
      },
      {name: 'robots', content: 'index, follow'},
      {name: 'author', content: 'Tom Cruickshank'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {name: 'date', content: '2019-10-31', scheme: 'YYYY-MM-DD'},
      {charset: 'UTF-8'},
    ]);
  }
}
