import { Injectable } from '@angular/core';
declare var require: any;
const Buffer = require('buffer').Buffer;

@Injectable({
  providedIn: 'root',
})

export class ImageService {
  private _PARAM_LOCATION = 'site';
  private _PARAM_FRONTCLOUD = 'https://images.kofc9544-charitytournament.golf';

  constructor() {}

  loadImage1920x940(image: string) {
    const resizedImage = this.resizeWithInS3(image, {
      resize: {
        width: 1920,
        height: 940,
        fit: 'cover',
      },
    });

    return `${this._PARAM_FRONTCLOUD}/${resizedImage}`;
  }

  loadImage1725x442(image: string) {
    const resizedImage = this.resizeWithInS3(image, {
      resize: {
        width: 1725,
        height: 442,
        fit: 'inside',
      },
    });

    return `${this._PARAM_FRONTCLOUD}/${resizedImage}`;
  }

  loadImage250x150(image: string) {
    const resizedImage = this.resizeWithInS3(image, {
      resize: {
        width: 150,
        height: 150,
        fit: 'inside',
      },
    });

    return `${this._PARAM_FRONTCLOUD}/${resizedImage}`;
  }

  loadImage300x150(image: string) {
    const resizedImage = this.resizeWithInS3(image, {
      resize: {
        width: 300,
        height: 150,
        fit: 'inside',
      },
    });

    return `${this._PARAM_FRONTCLOUD}/${resizedImage}`;
  }

  loadImage150x150(image: string) {
    const resizedImage = this.resizeWithInS3(image, {
      resize: {
        width: 150,
        height: 150,
        fit: 'inside',
      },
    });

    return `${this._PARAM_FRONTCLOUD}/${resizedImage}`;
  }

  loadImage300x214(image: string) {
    const resizedImage = this.resizeWithInS3(image, {
      resize: {
        width: 300,
        height: 214,
        fit: 'inside',
      },
    });

    return `${this._PARAM_FRONTCLOUD}/${resizedImage}`;
  }

  loadImage300x300(image: string) {
    const resizedImage = this.resizeWithInS3(image, {
      resize: {
        width: 300,
        height: 300,
        fit: 'inside',
      },
    });

    return `${this._PARAM_FRONTCLOUD}/${resizedImage}`;
  }

  loadImage48x48(image: string) {
    const resizedImage = this.resizeWithInS3(image, {
      resize: {
        width: 100,
        height: 100,
        fit: 'outside',
      },
    });

    return `${this._PARAM_FRONTCLOUD}/${resizedImage}`;
  }

  loadImage350(image: string) {
    const resizedImage = this.resizeWithInS3(image, {
      resize: {
        width: 350,
        fit: 'inside',
      },
    });

    return `${this._PARAM_FRONTCLOUD}/${resizedImage}`;
  }



  loadImage270x284(image: string) {
    const resizedImage = this.resizeWithInS3(image, {
      resize: {
        width: 270,
        height: 284,
        fit: 'inside',
      },
    });

    return `${this._PARAM_FRONTCLOUD}/${resizedImage}`;
  }

  loadImage200x200(image: string) {
    const resizedImage = this.resizeWithInS3(image, {
      resize: {
        width: 200,
        height: 200,
        fit: 'inside',
      },
    });

    return `${this._PARAM_FRONTCLOUD}/${resizedImage}`;
  }

  loadImage400(image: string) {
    const resizedImage = this.resizeWithInS3(image, {
      resize: {
        width: 400,
        fit: 'cover',
      },
    });

    return `${this._PARAM_FRONTCLOUD}/${resizedImage}`;
  }
  loadImage100(image: string) {
    const resizedImage = this.resizeWithInS3(image, {
      resize: {
        width: 100,
        fit: 'cover',
      },
    });

    return `${this._PARAM_FRONTCLOUD}/${resizedImage}`;
  }

  loadImage1920x400(image: string) {
    const resizedImage = this.resizeWithInS3(image, {
      resize: {
        width: 1920,
        height: 400,
        fit: 'outside',
      },
    });

    return `${this._PARAM_FRONTCLOUD}/${resizedImage}`;
  }

  loadImage450x450(image: string) {
    const resizedImage = this.resizeWithInS3(image, {
      resize: {
        width: 450,
        height: 450,
        fit: 'inside',
      },
    });

    return `${this._PARAM_FRONTCLOUD}/${resizedImage}`;
  }

  loadImage500x500(image: string) {
    const resizedImage = this.resizeWithInS3(image, {
      resize: {
        width: 500,
        height: 500,
        fit: 'cover',
      },
    });

    return `${this._PARAM_FRONTCLOUD}/${resizedImage}`;
  }

  loadImage270x270(image: string) {
    const resizedImage = this.resizeWithInS3(image, {
      resize: {
        width: 270,
        height: 270,
        fit: 'inside',
      },
    });

    return `${this._PARAM_FRONTCLOUD}/${resizedImage}`;
  }


  loadImage100x100(image: string) {
    const resizedImage = this.resizeWithInS3(image, {
      resize: {
        width: 75,
        height: 75,
        fit: 'outside',
      },
    });

    return `${this._PARAM_FRONTCLOUD}/${resizedImage}`;
  }

  loadImage290x450(image: string) {
    const resizedImage = this.resizeWithInS3(image, {
      resize: {
        width: 290,
        height: 450,
        fit: 'cover',
      },
    });

    return `${this._PARAM_FRONTCLOUD}/${resizedImage}`;
  }

  loadImage1280x720(image: string) {
    const resizedImage = this.resizeWithInS3(image, {
      resize: {
        width: 1280,
        height: 720,
        fit: 'outside',
      },
    });
    return `${this._PARAM_FRONTCLOUD}/${resizedImage}`;
  }

  loadImage720x1280(image: string) {
    const resizedImage = this.resizeWithInS3(image, {
      resize: {
        width: 720,
        height: 1280,
        fit: 'outside',
      },
    });
    return `${this._PARAM_FRONTCLOUD}/${resizedImage}`;
  }

  /**
   * Setup Signature so that a specific bucket and key are resized with the resized serverless app that is running along with the edits
   * being applied
   * @param key
   * @param edits
   */
  public resizeWithInS3(key: string, edits: EditProperties) {
    if (this._PARAM_LOCATION) {
      key = `${this._PARAM_LOCATION}/${key}`;
    }

    const imageRequest = JSON.stringify({
      bucket: 'images-kofc-golf',
      key: key,
      edits: edits,
    });

    return `${Buffer.from(imageRequest).toString('base64')}`;
  }

  public setSitePrefix(prefix = true) {
    if (prefix) {
      this._PARAM_LOCATION = 'site';
    } else {
                  this._PARAM_LOCATION = '';
    }
  }

  public setHeadShotsPrefix(prefix = true) {
    if (prefix) {
      this._PARAM_LOCATION = 'headshots';
    }
  }

  public setBannerPrefix(prefix = true) {
    if (prefix) {
      this._PARAM_LOCATION = 'banner';
    }
  }
}

export interface EditProperties {
  resize: {
    width?: number;
    height?: number;
    fit?: string;
  };
}
