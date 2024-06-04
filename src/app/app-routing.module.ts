import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { AboutComponent } from './about/about.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { RegisterComponent } from './register/register.component';
import {MainGalleryComponent} from "./main-gallery/main-gallery.component";
import {MainGalleryResolver} from "./main-gallery/main-gallery.resolver";
import { InfoComponent } from './info/info.component';
import { RecipientsComponent } from './recipients/recipients.component';
import {ViewGalleryComponent} from "./view-gallery/view-gallery.component";
import {ViewGalleryResolver} from "./view-gallery/view-gallery.resolver";
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryResolver } from './gallery/gallery.resolver';

const routes: Routes = [
    {
      path: '',
      component: HomeComponent,
    },
    {
      path: 'kofc9544',
      component: AboutComponent,
    },
    {
      path: 'info',
      component: InfoComponent,
    },
    {
      path: 'volunteer',
      component: VolunteerComponent,
    },
    {
      path: 'sponsor',
      component: SponsorComponent,
    },
    {
      path: 'charities',
      component: RecipientsComponent,
    },
    {
      path: 'sponsors',
      component: SponsorsComponent,
    },
    {
      path: 'register',
      component: RegisterComponent,
    },
  {
    path: 'photo',
    component: MainGalleryComponent,
    resolve: {
      images: MainGalleryResolver,
    }
  },
  {
    path: 'photo/:id',
    component: ViewGalleryComponent,
    resolve: {
      images: ViewGalleryResolver,
    }

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
