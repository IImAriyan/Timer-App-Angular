import { Routes } from '@angular/router';
import {ModuleWithProviders} from "@angular/core";
import {ClockComponent} from "./pages/clock/clock.component";
import {CalendarComponent} from "./pages/calendar/calendar.component";
import {AlarmComponent} from "./pages/alarm/alarm.component";

export const routes: Routes = [
  {
  path : '',
  redirectTo : 'home',
  pathMatch : 'full',
  },

  {
    path:'home',
    component:ClockComponent
  },

  {
    path:'calendar',
    component:CalendarComponent
  },

  {
    path:'alarm',
    component:AlarmComponent
  }

];
