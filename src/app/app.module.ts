import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SponsorComponent } from './sponsor/sponsor.component';
import { RegisterComponent } from './register/register.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { InfoComponent } from './info/info.component';
import { RecipientsComponent } from './recipients/recipients.component';
//import { LightgalleryModule} from "lightgallery/angular";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InfoComponent,
    SponsorComponent,
    RegisterComponent,
    VolunteerComponent,
    RecipientsComponent
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
  //  LightgalleryModule,
    FormsModule,
    HttpClientModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
