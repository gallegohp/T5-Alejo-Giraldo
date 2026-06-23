import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { PokemonModule } from './features/pokemon/pokemon-module';

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    PokemonModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
