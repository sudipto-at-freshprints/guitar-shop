import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { GuitarsComponent } from './components/guitars/guitars.component';
import { GuitarComponent } from './components/guitar/guitar.component';

import { ApiService } from './services/api.service';
import { GuitarDescComponent } from './components/guitar-desc/guitar-desc.component';
import { GuitarReviewsComponent } from './components/guitar-reviews/guitar-reviews.component';
import { GuitarSpecsComponent } from './components/guitar-specs/guitar-specs.component';
import { AddEditGuitarComponent } from './components/add-edit-guitar/add-edit-guitar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GuitarsComponent,
    GuitarComponent,
    GuitarDescComponent,
    GuitarReviewsComponent,
    GuitarSpecsComponent,
    AddEditGuitarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    Title,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
