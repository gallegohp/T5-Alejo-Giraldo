import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonList } from './componets/pokemon-list/pokemon-list';
import { PokemonCard } from './componets/pokemon-card/pokemon-card';
import { PokemonDetail } from './componets/pokemon-detail/pokemon-detail';

@NgModule({
  declarations: [PokemonList, PokemonCard, PokemonDetail],
  imports: [CommonModule],  //manejo de directivas
  exports: [PokemonList],
})
export class PokemonModule {}