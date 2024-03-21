import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { ImageService } from '../image.service';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  homeArray:any;
  faCoffee = faCoffee;

  constructor(private _imageService:ImageService) { }


  ngOnInit(): void {

    ///this._imageService.setBannerPrefix();
    this.homeArray = [
      { // who we are
        imageDesktop:  this._imageService.loadImage1920x940('loch-march-background.jpeg'),
//        "https://placehold.co/1920x940", //this._imageService.loadImage1920x940('soccer-field.jpeg'),
        imageLogo: this._imageService.loadImage400('dsp-logo-slide-big.png'),
      //  imageDesktop: "https://placehold.co/1920x940",// this._imageService.loadImage1920x940('P1120107.JPG'),
        imageMobile: "https://placehold.co/270x270", //this._imageService.loadImage270x270('P1120107.JPG'),
        title: "Knights of Columbus 9544 Annual Charity Golf Tournament",
        message: "<strong>Date:</strong> Tuesday, May 21, 2024<br>Location: Loch March Golf & Country Club - 1755 Old Carp Rd. Kanata, ON K2K 1X7<br>Cost: $175 per golfer (includes green fees, golf cart, and buffet supper)<br>Maximum 4 golfers per team",
        link: "/register",
        clickMore: "Register here"
      },
      {
        imageDesktop: this._imageService.loadImage1920x940('loch-march-sponsor.jpg'), //this._imageService.loadImage1920x940('P1120108.JPG'),
        imageLogo: this._imageService.loadImage100('dsp-logo-slide-big.png'),
        imageMobile: "https://placehold.co/270x270",//this._imageService.loadImage270x270('P1120108.JPG'),
        title: "Become a sponsor",
        message: "It's time for the Knights of Columbus Annual Charity Golf Tournament! Every year we have fun raising money for charity, but this event would not be possible without financial and in-kind donations from our generous sponsors. By sponsoring this event you will increase corporate visibility, while demonstrating your commitment to helping those in need in our community. Funds raised this year will be donated to the: <i>Shepherds of Good Hope – Hope Living Facility</i>; <i>Catholic Centre for Immigrants Ottawa</i>; and the <i>Youville Centre</i>.",
        link: "/sponsor",
        clickMore: "Become a sponsor",

      },
      {
        imageDesktop: this._imageService.loadImage1920x940('volunteer-background.jpeg'), //this._imageService.loadImage1920x940('P1120108.JPG'),
        imageLogo: this._imageService.loadImage100('dsp-logo-slide-big.png'),
        imageMobile: "https://placehold.co/270x270",//this._imageService.loadImage270x270('P1120108.JPG'),
        title: "Become a volunteer",
        message: "Are you looking for something fun to do on Tuesday, May 21, 2024? We are looking for help with golf registration, selling Raffle Board tickets, and various other activities. Please join us as a volunteer, and help make our 2024 Charity Golf Tournament the best one yet!",
        link: "/volunteer",
        clickMore: "Become a volunteer",
      },
    ]
  }
}
