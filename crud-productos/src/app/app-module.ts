import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { ProductModule } from './features/product/product-module';

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    ProductModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
