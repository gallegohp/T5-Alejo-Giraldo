import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { App } from './app';
import { UserModule } from './features/user/user-module';

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UserModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection()
  ],
  bootstrap: [App]
})
export class AppModule { }
