import { Pipe, PipeTransform } from '@angular/core';
import {ImageService} from "./image.service";

@Pipe({
  name: 'formatImage',
  standalone: true
})
export class FormatImagePipe implements PipeTransform {

  constructor(private _imageService: ImageService) {
  }
  transform(value: any, ...args: unknown[]): any {
    if (args.length === 0) {
      return this._imageService.loadImage270x270(value.key)
    }

    const size = args[0];
    /*    if (image.orientation === 1) {
      //    this.galleryImages.push({ big: this._imageService.loadImage1280x720(image['key']),  small: this._imageService.loadImage100x100(image['key']) })
      this.galleryImages.push({ big: this._imageService.loadImage720x1280(image['key']),  small: this._imageService.loadImage270x270(image['key']) })
    } else {
      //     this.galleryImages.push({ big: this._imageService.loadImage720x1280(image['key']),  small: this._imageService.loadImage100x100(image['key']) })

      this.galleryImages.push({ big: this._imageService.loadImage1280x720(image['key']),  small: this._imageService.loadImage270x270(image['key']) })
    }

*/

    if (size === "big") {
        if (value.orientation === 1) {
          return this._imageService.loadImage720x1280(value.key)
        } else {
          return this._imageService.loadImage1280x720(value.key)
        }
    }



  //  return this._imageService.loadImage350(value);
    //console.log('hello');
    //return value;
  }

}
