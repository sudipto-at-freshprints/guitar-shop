import { AddEditGuitarComponent } from './components/add-edit-guitar/add-edit-guitar.component';
import { GuitarSpecsComponent } from './components/guitar-specs/guitar-specs.component';
import { GuitarReviewsComponent } from './components/guitar-reviews/guitar-reviews.component';
import { GuitarDescComponent } from './components/guitar-desc/guitar-desc.component';
import { GuitarComponent } from './components/guitar/guitar.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'guitar/:id',
    component: GuitarComponent,
    children: [
      { path: '',redirectTo:'desc',pathMatch:'full'},
      { path: 'desc', component: GuitarDescComponent },
      { path: 'specs', component: GuitarSpecsComponent },
      { path: 'reviews', component: GuitarReviewsComponent },
    ],
  },
  { path: 'add-guitar', component: AddEditGuitarComponent },
  { path: 'guitar/edit/:id', component: AddEditGuitarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
