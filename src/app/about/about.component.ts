import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { ImageService } from '../image.service';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AboutComponent implements OnInit {
  aboutCoverImage: any;
  aboutSideImage: any;

  constructor(private _imageService: ImageService, private _metaTagService: Meta) {
  }


  ngOnInit(): void {
    this._imageService.setBannerPrefix();
    this.aboutCoverImage = this._imageService.loadImage1725x442('golf-background2.png');
    this._imageService.setSitePrefix();
   // this.aboutSideImage =  'https://placehold.co/270x284'//'' this._imageService.loadImage450x450('about-side-image.jpg');
    this.aboutSideImage = this._imageService.loadImage270x284('kofc-plague.jpeg');


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
