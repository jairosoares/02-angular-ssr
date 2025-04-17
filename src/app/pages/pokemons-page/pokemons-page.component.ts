import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SimplePokemon } from 'src/app/pokemons/interfaces';
import { PokemonsService } from 'src/app/pokemons/services/pokemons.service';

import { PokemonListComponent } from '../../pokemons/components/pokemon-list/pokemon-list.component';

import { toSignal } from '@angular/core/rxjs-interop';
import { map, tap } from 'rxjs';
import { PokemonListSkeletonComponent } from "../../pokemons/components/pokemon-list-skeleton/pokemon-list-skeleton.component";


@Component({
  selector: 'pokemons-page',
  templateUrl: './pokemons-page.component.html',
  imports: [PokemonListComponent, PokemonListSkeletonComponent],
})
export class PokemonsPageComponent implements OnInit {

  private pokemonsService = inject(PokemonsService);

  public pokemons = signal<SimplePokemon[]>([]);

  private route = inject(ActivatedRoute);

  private router = inject(Router);

  public currentPage =  toSignal<number>(
    this.route.queryParamMap.pipe(
      map( params => params.get('page') ?? '1'),  // page eh uma string
      map( page => ( isNaN(+page) ? 1: +page)),    // transforma page string para page number
      map( page => Math.max(1, page))             // assegura que nao vai mandar um -10
    )
  );

  //private appRef = inject(ApplicationRef);

  // o simbolo de $ éh pra indicar que eh um observable
  // private $appState = this.appRef.isStable.subscribe(isStable => {
  //   console.log({isStable});
  // })

  // public isLoading = signal(true);

  ngOnInit(): void {
    this.loadPokemons();
  }

  loadPokemons(page: number = 0): void {

    const pageToLoad = (this.currentPage() ?? 1) + page;

    // o parametro [] quer dizer que nao esta navegando pra nenhum lugar, apenas atuaizando page no segundo argumento
    this.pokemonsService.loadPage(pageToLoad)
      .pipe(
        tap( () => {
          this.router.navigate([], {queryParams: { page: pageToLoad}}) // atualiza a pagina, atualizando a rota
        })
      )
      .subscribe(pokemons => {
        this.pokemons.set(pokemons);
      });
  }

}
