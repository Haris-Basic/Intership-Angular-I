import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandsComponent } from './brands/brands.component';
import { ModelsComponent } from './models/models.component';
import { ShowBrandsComponent } from './brands/show-brands/show-brands.component';
import { AddEditBrandComponent } from './brands/add-edit-brand/add-edit-brand.component';
import { ShowModelsComponent } from './models/show-models/show-models.component';
import { AddEditModelComponent } from './models/add-edit-model/add-edit-model.component';
import { SharedService } from './shared.service';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BrandsComponent,
    ModelsComponent,
    ShowBrandsComponent,
    AddEditBrandComponent,
    ShowModelsComponent,
    AddEditModelComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
