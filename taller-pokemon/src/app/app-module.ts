import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';  // importar
import { App } from './app';
import { PokemonModule } from './features/pokemon/pokemon-module';

@NgModule({
  declarations: [App],
  imports: [BrowserModule, HttpClientModule, PokemonModule], 
  bootstrap: [App],
})
export class AppModule {}