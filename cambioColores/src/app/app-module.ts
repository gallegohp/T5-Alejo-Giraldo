import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { App } from './app';
import { Boton } from './components/boton/boton';
import { Cuadrado } from './components/cuadrado/cuadrado';

@NgModule({
  declarations: [
    App,
    Boton,
    Cuadrado
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
