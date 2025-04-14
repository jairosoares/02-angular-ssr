import { Routes } from '@angular/router';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { PricePageComponent } from './pages/price-page/price-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

export const routes: Routes = [
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: 'price',
    component: PricePageComponent
  },
  {
    path: 'contact',
    component: ContactPageComponent
  },
  {
    path: '**',
    redirectTo: 'about'
  }
]
