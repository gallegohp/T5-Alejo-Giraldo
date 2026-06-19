import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { App } from './app';
import { Img } from './components/img/img';
import { ProductCard } from './components/product-card/product-card';
import { ProductsList } from './components/products-list/products-list';
import { Nav } from './components/nav/nav';
import { ReversePipe } from './pipes/reverse-pipe';
import { TimeAgoPipe } from './pipes/time-ago-pipe';
import { VocalesPipe } from './pipes/vocales-pipe';
import { Highlight } from './directives/highlight';

const routes: Routes = [
  { path: '', component: ProductsList },
  { path: 'products', component: ProductsList },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    App,
    Img,
    ProductCard,
    ProductsList,
    Nav,
    ReversePipe,
    TimeAgoPipe,
    VocalesPipe,
    Highlight
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
