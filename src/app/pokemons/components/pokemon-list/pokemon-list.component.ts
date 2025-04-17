import { SimplePokemon } from './../../interfaces/simple-pokemon.interface';
import { resolve } from 'node:path';
import { Component, input } from '@angular/core';
import { PokemonCardComponent } from "../pokemon-card/pokemon-card.component";


@Component({
  selector: 'pokemon-list',
  templateUrl: './pokemon-list.component.html',
  imports: [PokemonCardComponent],
})
export class PokemonListComponent {

  public pokemons = input.required<SimplePokemon[]>();

}
