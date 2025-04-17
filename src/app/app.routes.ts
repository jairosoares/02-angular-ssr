import { Routes } from '@angular/router';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { PricePageComponent } from './pages/price-page/price-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { PokemonsPageComponent } from './pages/pokemons-page/pokemons-page.component';
import { PokemonPageComponent } from './pages/pokemon-page/pokemon-page.component';

export const routes: Routes = [
  {
    path: 'pokemons',
    component: PokemonsPageComponent
  },
  {
    path: 'pokemons/:id',
    component: PokemonPageComponent
  },
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
