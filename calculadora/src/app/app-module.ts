import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { BaseCalculadora } from './components/base-calculadora/base-calculadora';
import { BotonesCalc } from './components/botones-calc/botones-calc';
import { Resultado } from './components/resultado/resultado';

@NgModule({
  declarations: [
    App,
    BaseCalculadora,
    BotonesCalc,
    Resultado
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection()
  ],
  bootstrap: [App]
})
export class AppModule { }
