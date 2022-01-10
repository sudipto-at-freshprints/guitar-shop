import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { GuitarsComponent } from './components/guitars/guitars.component';
import { GuitarComponent } from './components/guitar/guitar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GuitarsComponent,
    GuitarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
