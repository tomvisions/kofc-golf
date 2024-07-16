import {DataService} from "./data.service";
import {FormsModule} from "@angular/forms";
import {Component, NgModule, ViewEncapsulation} from "@angular/core";
import {CalendarComponent} from "./calendar.component";
import {DayPilotModule} from "@daypilot/daypilot-lite-angular";
import {provideHttpClient} from "@angular/common/http";
import {CommonModule} from "@angular/common";

@NgModule({
  imports:      [
    CommonModule,
    FormsModule,
    DayPilotModule,
  ],
  declarations: [
    CalendarComponent
  ],
  exports:      [ CalendarComponent ],
  providers:    [
    DataService,
    provideHttpClient()
  ]
})
export class CalendarModule { }
