import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PokemonList } from './componets/pokemon-list/pokemon-list'


@NgModule({
  declarations: [
    PokemonList
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class PokemonModule { 

  
}
