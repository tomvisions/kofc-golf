import { Component } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { GalleryService } from './gallery.service';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import lgZoom from 'lightgallery/plugins/zoom';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  galleryImages:any;
  galleries:any;
  galleryName:any;
  settings:any;
  onBeforeSlide:any;

  
  constructor(
    private _galleryService: GalleryService, private _imageService: ImageService
  ) {}

  ngOnInit() {
    this.settings =  {
      counter: false,
      plugins: [lgZoom],
    };
    
    this.onBeforeSlide = (detail: BeforeSlideDetail): void => {
      const { index, prevIndex } = detail;
      console.log(index, prevIndex);
    };
    
    this._galleryService.getGallery$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((galleries) => {

        this.galleries = galleries
     //   this._galleryService.setSitePrefix(false);
        this.galleryImages = [];
        for (let image of this.galleries) {
          if (image.orientation === 1) {
      //    this.galleryImages.push({ big: this._imageService.loadImage1280x720(image['key']),  small: this._imageService.loadImage100x100(image['key']) })
          this.galleryImages.push({ big: this._imageService.loadImage720x1280(image['key']),  small: this._imageService.loadImage100x100(image['key']) })
          } else {
       //     this.galleryImages.push({ big: this._imageService.loadImage720x1280(image['key']),  small: this._imageService.loadImage100x100(image['key']) })
      
            this.galleryImages.push({ big: this._imageService.loadImage1280x720(image['key']),  small: this._imageService.loadImage100x100(image['key']) })
          }
        }  
        console.log(this.galleryImages);  
      })
  }
}