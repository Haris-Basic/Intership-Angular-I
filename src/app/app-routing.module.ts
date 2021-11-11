import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BrandsComponent } from './brands/brands.component'
import { ModelsComponent } from './models/models.component'

const routes: Routes = [
  {path: 'brands', component:BrandsComponent},
  {path: 'models', component:ModelsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
