import { Routes } from '@angular/router';
import {ModuleWithProviders} from "@angular/core";
import {ClockComponent} from "./pages/clock/clock.component";

export const routes: Routes = [
  {
  path : '',
  redirectTo : 'home',
  pathMatch : 'full',
  },

  {
    path:'home',
    component:ClockComponent
  }
];
