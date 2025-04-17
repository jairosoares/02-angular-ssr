import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MetaService } from '@services/meta.service';
import { tap } from 'rxjs';
import { Pokemon } from 'src/app/pokemons/interfaces';
import { PokemonsService } from 'src/app/pokemons/services/pokemons.service';

@Component({
  selector: 'pokemon-page',
  templateUrl: './pokemon-page.component.html',
  imports: [],
})
export class PokemonPageComponent implements OnInit {

  private pokemonService = inject(PokemonsService);
  private metaService = inject(MetaService);
  private route = inject(ActivatedRoute);

  public pokemon = signal<Pokemon | null>(null);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      return;
    }

    // antes do subscribe, usando pipe e tap para fazer algo, no caso, setando SEO (buscador...)
    this.pokemonService.loadById(id)
      .pipe(
        tap( ({name,id}) => {

          const pageTitle = `${id} - ${name}`;
          const pageDescription = `Pagina do Pokemon ${name}`;
          const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

          this.metaService.updateMetaData({
            title: pageTitle,
            description: pageDescription,
            ogTitle: pageTitle,
            ogImage: img,
          });

        })
      )
      .subscribe(this.pokemon.set);
  }

}
