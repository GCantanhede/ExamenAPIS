import { Routes } from '@angular/router';
import {HomeGuilhermeCantanhedeComponent} from "./home-guilherme-cantanhede/home-guilherme-cantanhede.component";

export const routes: Routes = [
  {path: '**', title: '', component:HomeGuilhermeCantanhedeComponent},
];
