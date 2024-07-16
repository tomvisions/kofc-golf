import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { ImageService } from '../image.service';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {Meta} from "@angular/platform-browser";

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

  constructor(private _imageService:ImageService, private _metaTagService: Meta) { }


  ngOnInit(): void {

    ///this._imageService.setBannerPrefix();
    this.homeArray = [
      { // who we are
        imageDesktop:  this._imageService.loadImage1920x940('loch-march-background.jpeg'),
        imageMobile: this._imageService.loadImage270x270('loch-march-background.jpeg'),
        title: "Knights of Columbus 9544 Council",
        message: "<strong>Date:</strong> Tuesday, May 21, 2024<br>Location: Loch March Golf & Country Club - 1755 Old Carp Rd. Kanata, ON K2K 1X7<br>Cost: $175 per golfer (includes green fees, golf cart, and buffet supper)<br>Maximum 4 golfers per team",
        link: "/register",
        clickMore: "Register here"
      },
      {
        imageDesktop: this._imageService.loadImage1920x940('loch-march-sponsor.jpg'), //this._imageService.loadImage1920x940('P1120108.JPG'),
        imageMobile: this._imageService.loadImage270x270('loch-march-sponsor.jpg'),
        title: "Become a sponsor",
        message: "It's time for the Knights of Columbus Annual Charity Golf Tournament! Every year we have fun raising money for charity, but this event would not be possible without financial and in-kind donations from our generous sponsors. By sponsoring this event you will increase corporate visibility, while demonstrating your commitment to helping those in need in our community. Funds raised this year will be donated to the: <i>Shepherds of Good Hope – Hope Living Facility</i>; <i>Catholic Centre for Immigrants Ottawa</i>; and the <i>Youville Centre</i>.",
        link: "/sponsor",
        clickMore: "Become a sponsor",

      },
      {
        imageDesktop: this._imageService.loadImage1920x940('lochmarch-arial.jpg'), //this._imageService.loadImage1920x940('P1120108.JPG'),
        imageMobile: this._imageService.loadImage270x270('lochmarch-arial.jpg'),
        title: "Support Our Charities",
        message: "Please join us for a fun day of fellowship and fundraising to support a few key local charities. This year's proceeds will be shared among:<ul><li>• The Youville Centre</li><li>• The Catholic Centre for Immigrants</li><li>• Shepherds of Good Hope - Hope Living Centre in Kanata</li></ul>",
        link: "/charities",
        clickMore: "Read more",
      },
      {
        imageDesktop: this._imageService.loadImage1920x940('volunteer-background.jpeg'), //this._imageService.loadImage1920x940('P1120108.JPG'),
        imageMobile: this._imageService.loadImage270x270('volunteer-background.jpeg'),
        title: "Become a volunteer",
        message: "Are you looking for something fun to do on Tuesday, May 21, 2024? We are looking for help with golf registration, selling Raffle Board tickets, and various other activities. Please join us as a volunteer, and help make our 2024 Charity Golf Tournament the best one yet!",
        link: "/volunteer",
        clickMore: "Become a volunteer",
      },
    ]



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
