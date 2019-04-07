import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { KsiazkiComponent } from './ksiazki/ksiazki.component';
import { FilmyComponent } from './filmy/filmy.component';
import {RouterModule, Routes} from "@angular/router";

const appRoutes: Routes = [
  {path: 'ksiazki', component: KsiazkiComponent},
  {path: 'filmy', component: FilmyComponent}
  ]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    KsiazkiComponent,
    FilmyComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
