import { NgModule,  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SponsorComponent } from './sponsor/sponsor.component';
import { RegisterComponent } from './register/register.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { InfoComponent } from './info/info.component';
import { RecipientsComponent } from './recipients/recipients.component';
import {LightgalleryModule} from "lightgallery/angular";
import {DisplayTagPipe} from "./display-tag.pipe";
import {MainGalleryComponent} from "./main-gallery/main-gallery.component";
import {ViewGalleryComponent} from "./view-gallery/view-gallery.component";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InfoComponent,
    SponsorComponent,
    RegisterComponent,
    VolunteerComponent,
    RecipientsComponent,
    MainGalleryComponent,
    ViewGalleryComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    LightgalleryModule,
    DisplayTagPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
