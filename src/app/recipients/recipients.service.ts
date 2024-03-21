import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, filter, map, Observable, of, switchMap, take, tap, throwError } from 'rxjs';
import { SharedService } from "../shared.service";
import { ImageService } from '../image.service';

@Injectable({
    providedIn: 'root'
})
export class RecipientsService {


    /**
     * Constructor
     */
    constructor(private _httpClient: HttpClient, private _sharedService: SharedService, private _imageService: ImageService) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    getCharities() {
        return [
            {
                image: this._imageService.loadImage300x150("hope-living-facility.jpeg"),
                name: "Shephards of Good Hope - Hope Living Facility",
                content: "<p>Hope Living, is a supportive housing residence in Kanata run by Shepherds of Good Hope that provides a permanent home for seniors many of whom were formerly homeless. Most of the Hope Living residents are living with complex mental health challenges and multiple physical disabilities. The program offers a variety of on-site amenities, including a full-service dining hall, activity room, and expansive outdoor area. Hope Living provides its residents with comprehensive health and wellness support, enabling them to maintain their independence while developing life skills and integrating into the community. This year, Shepherds of Good Hope celebrates 40 years in the community and continues to provide support and care to vulnerable individuals in our community.</p>",
                link: "https://www.sghottawa.com/hope_living/",
            },
            {
                image: this._imageService.loadImage300x150("cci-ottawa-logo.png"),
                name: "Catholic Centre for Immigrants Ottawa",
                content: "<p>For 70 years, The Catholic Centre for Immigrants (CCI) Ottawa has been welcoming and helping newcomers feel at home in Ottawa by providing them with needed services and resources to become fully engaged members of our community. They have programs for youth, seniors, those seeking connections to a faith community, and those who need employment help. CCI Ottawa helps newcomers find housing, look for jobs, enroll their children into school and much more. They help immigrants integrate and adjust to Canadian culture and our way of life while respecting and encouraging the benefits of a diverse society.</p>",
                link: " https://cciottawa.ca/",
            },
            {
                image: this._imageService.loadImage300x150("youville-center.jpeg"),
                name: "Youville Centre",
                content: "<p>Located in Ottawa, Youville Centre is a non-profit registered charity and Accredited Child and Youth Mental Health Agency that serves adolescent mothers and their children. Since 1985, Youville’s trauma-informed, holistic programs and services include: a fully accredited secondary school, crisis intervention, intensive mental health therapy and treatment, substance use counselling, collaborative problem solving, a licensed child development program with a focus on infant mental health, and attachment-based parenting programs with intervention and treatment.</p>",
                link: "https://www.youvillecentre.org/",
            },
        ]
    }



}
